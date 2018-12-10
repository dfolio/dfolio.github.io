################################################################################
## Copyright (c) 2018 David Folio
## All rights reserved.
################################################################################
##  License : under CC by license style...
################################################################################

################################################################################
# Important Subdirs 
ASSETS_DIR    ?=assets
JS_DIR        ?=$(ASSETS_DIR)/js
ASSETS_VENDOR_DIR ?= $(ASSETS_DIR)/vendor
FAVICO_DIR    ?=$(ASSETS_DIR)/favicons

LOCAL_DIR     ?=_site
# created by npm (nodejs)
NODEDIR       ?=node_modules
################################################################################
# EXTERNAL PROGRAMS:
# = ESSENTIAL PROGRAMS
# == Usefull external program 
GEM       ?= gem
BUNDLE    ?= bundle
JEKYLL    ?= jekyll
NPM       ?= npm
PROOFER   ?= htmlproofer
RSYNC     ?= rsync 
# == Basic Shell Utilities
CAT       ?= cat
CP        ?= cp -f
DATE      ?= date
ECHO      ?= echo
MKDIR     ?= mkdir -p
MV        ?= mv -f
SED       ?= sed
TAR       ?= tar
TPUT      ?= tput
TOUCH     ?= touch
WHICH     ?= which
ZIP       ?= zip

################################################################################
# Default FLAGS

RSYNC_FLAGS   ?= -r -t -p -o -g -l -c -z -u -s -a
# Turn on final version of the document
ifdef PROD
undefine VERBOSE
undefine DRAFT
undefine KEEP_TEMP
endif
# Manage quiet/verbose mode 
ifndef VERBOSE
QUIET  := @
endif

ifneq ($(QUIET),)
MAKEFLAGS   += --silent
else
VERBOSE     ?= 1
endif
ifdef VERBOSE
RSYNC_FLAGS += --verbose -h --progress
WRITE_LOG   ?= 1
else
RSYNC_FLAGS += --quiet
endif

# Turn on shell debugging with SHELL_DEBUG=1
# (EVERYTHING is echoed, even $(shell ...) invocations)
ifdef SHELL_DEBUG
SHELL       += -x
WRITE_LOG   ?= 1
endif


###############################################################################
# Utility Functions and Definitions
#

# Turn off forceful rm (RM is usually mapped to rm -f)
ifdef SAFE_RM
RM  := rm
endif

# Test that a file exists
# $(call test-exists,file)
test-exists    = [ -e '$1' ]

# Don't call this directly - it is here to avoid calling wildcard more than
# once in remove-files.
remove-files-helper = $(if $1,$(RM) $1,$(sh_true))

# $(call remove-files,source destination)
remove-files        = $(call remove-files-helper,$(wildcard $1))

# Removes all cleanable files in the given list
# $(call clean-files,source destination file3 ...)
# Works exactly like remove-files, but filters out files in $(neverclean)
clean-files    = \
  $(if $(VERBOSE),\
  $(echo_dt) "$(C_WARNING)Clean files '$1'$(reset)",:); \
  $(call remove-files,$(call cleanable-files,$1))

# Utility function for obtaining all files not specified in $(neverclean)
# $(call cleanable-files,source destination file3 ...)
# Returns the list of files that is not in $(wildcard $(neverclean))
cleanable-files = $(filter-out $(wildcard $(neverclean)), $1)

# Use RSYNC instead of simple CP to allow remote copying 
USE_RSYNC := $(if $(shell $(WHICH) $(RSYNC) 2>/dev/null),yes,)
define copy-helper
$(if $(USE_RSYNC),\
  $(RSYNC) $(RSYNC_FLAGS) '$(strip $1)' '$(strip $2)',\
  $(CP) '$(strip $1)' '$(strip $2)' )
endef
# Copy source to destination only if source exist 
define copy-if-exists  
$(call test-exists,$1) && $(call copy-helper,$1,$2) || \
  $(call echo-error, " '$1' does not exist and cannot be copied to '$2'")
endef


# Terminal color definitions
REAL_TPUT := $(if $(NO_COLOR),,$(shell $(WHICH) $(TPUT)))
# $(call get-term-code,codeinfo)
get-term-code = $(if $(REAL_TPUT),$(shell $(REAL_TPUT) $1),)
black   := $(call get-term-code,setaf 0)
red     := $(call get-term-code,setaf 1)
green   := $(call get-term-code,setaf 2)
yellow  := $(call get-term-code,setaf 3)
blue    := $(call get-term-code,setaf 4)
magenta := $(call get-term-code,setaf 5)
cyan    := $(call get-term-code,setaf 6)
white   := $(call get-term-code,setaf 7)
bold    := $(call get-term-code,bold)
uline   := $(call get-term-code,smul)
reset   := $(call get-term-code,sgr0)
# STANDARD COLORS
C_ERROR     := $(red)$(bold)
C_WARNING   := $(magenta)
C_INFO      := $(green)


get_date_time = $(DATE) +"%F %T"
# Display information about what is being done
echo_dt       = $(ECHO) -e   "$(yellow)$(shell $(get_date_time))$(reset)"

# $(call echo-error,<msg>)
echo-error    = $(echo_dt) "$(C_ERROR)**ERROR** $1$(reset)"
echo-warning  = $(echo_dt) "$(C_WARNING)**WARNING** $1$(reset)"
echo-info     = $(echo_dt) "$(C_INFO)$1$(reset)"
echo-success  = $(echo_dt) "$(green)$(bold)$1$(reset)"
echo-failure  = $(echo_dt) "$(red)$(bold)$1$(reset)"


# $(call echo-build,<target>,[<run number>])
echo-build    = $(echo_dt) "\t$(blue)$(bold)==Build==$(reset)$(blue)\t$2$(if $3, ($3),)...$(reset)"
# $(call echo-run,<prog>,<arg>)
echo-run      = $(echo_dt) "\t$(cyan)>>$(bold)Run $1$(reset)$(cyan)$(if $2,\t$2,)...$(reset)"
echo-copy     = $(echo_dt) "\t$(cyan)>>Copy $1$(if $2,\t$2 $(if $3,--> $3,),)...$(reset)"

define echo-end-build
&& $(call echo-success,Successfully build $1") ||
$(call echo-failure, Fail to build $1!!!") 
endef


# Bundle invocations
# $(call run-bundle,<command>,[opts])
define run-bundle
$(call echo-run,$(BUNDLE),$1,$2); $(BUNDLE) $1 $(if $2,$2,)
endef

# Jekyll invocations
# $(call run-jekyll,<command>,[opts])
define run-jekyll
$(call echo-run,$(JEKYLL),$1); $(call run-bundle,exec, $(JEKYLL) $1 $(if $2,$2,))
endef
define run-proof
$(call echo-run,$(PROOFER),$1); $(call run-bundle,exec, $(PROOFER) $(if $2,$2,) $1)
endef


# Node package manager invocation
#
# npm install <package>  <=> yarn add <package>     => $(call run-node,add,<package>)
# npm update  <package>  <=> yarn upgrade <package> => $(call run-node,upgrade,<package>)
define run-node
$(call echo-run,$(NPM),$1); $(strip $(NPM)) $1 $(if $2,$2,)
endef


################################################################################
# Dependancies
BUILD_DEPS    += Gemfile.lock  package-lock.json
SERVE_DEPS    += $(BUILD_DEPS) _includes/collapse.css

# Cleanable files/directories
clean_dirs    +=$(LOCAL_DIR)
clean_node    +=node_modules package-lock.json 
clean_bundle  +=.bundle Gemfile.lock

###############################################################################

.SUFFIXES:
###############################################################################
# DEFAULT TARGET
#
.DEFAULT_GOAL  ?= all
all:build

test:
	$(QUIET)$(echo_dt) "BUILD_DEPS:'$(BUILD_DEPS) '"

################################################################################
# MAIN TARGETS
#

# Build local 
.PHONY: build
build $(LOCAL_DIR): $(BUILD_DEPS)
	$(QUIET)$(call echo-build,$(JEKYLL),local)
	$(call run-jekyll,build,--destination "$(LOCAL_DIR)")  \
			$(call echo-end,local)

serve: $(SERVE_DEPS) $(LOCAL_DIR)
	$(QUIET)$(call echo-build,$(JEKYLL),serve)
	$(call run-jekyll,serve, --watch --incremental)
	
USE_PROOFER := $(if $(shell $(WHICH) $(HTMLPROOF) 2>/dev/null),yes,)
check:
	$(QUIET)$(call echo-build,$(JEKYLL),doctor)
	$(call run-jekyll,doctor)  \
			$(call echo-end,doctor)
ifneq ($(USE_PROOFER),)
	$(call run-proof,$(LOCAL_DIR),\
	--check-html --http-status-ignore 999 --internal-domains localhost:4000 --assume-extension)		
endif

################################################################################
# INTERMEDIATE TARGETS
$(LOCAL_DIR)/assets/css/%.css: $(ASSETS_DIR)/css/%.scss | $(LOCAL_DIR)
	$(QUIET)$(call echo-copy,$<,$@,$*)

_includes/%.css:$(LOCAL_DIR)/assets/css/%.css 
	$(QUIET)$(call echo-copy,$<,$@,$*)
	$(call copy-if-exists,$<,$@)

################################################################################
# PREPARE TARGETS
.PHONY: prepare
prepare:install-bundle install-node;

# Install Ruby gem modules given in Gemfile
install-gem: install-bundle;
install-bundle Gemfile.lock: Gemfile
	$(QUIET)$(call run-bundle,install) \
	$(call echo-end,$(BUNDLE) packages now installed )

install-node package-lock.json: package.json
	$(QUIET)$(call echo-run,$(NODE),install)
	$(QUIET)$(call run-node,add) \
	$(call echo-end,$(NODE) packages now installed )

# Install a node module
$(NODEDIR)/%/:
	$(QUIET)$(call echo-info,"$* will be installed in the local folder")
	$(QUIET)$(call echo-run,$(NODE),install,$*)
	$(QUIET)$(call run-node,add,$*) \
	$(call echo-end,$* now installed in '$@')

.PHONY: update
update:update-bundle

update-gem:update-bundle;
update-bundle: Gemfile.lock
	$(QUIET)$(call run-bundle,upgrade) \
	$(call echo-end,$(BUNDLE) upgraded)

.SECONDARY:update-node
update-node: package-lock.json
	$(QUIET)$(call run-node,upgrade) \
	$(call echo-end,$(NODE) upgraded)

################################################################################
# CLEAN TARGETS
#
.PHONY: clean
clean: clean-dirs clean-node clean-bundle 
clean-dirs:
	$(QUIET)$(echo_dt) "$(magenta) Clean generated dirs:'$(clean_dirs)'$(reset)"
	$(QUIET)$(RM) -r $(clean_dirs)
clean-node:
	$(QUIET)$(echo_dt) "$(magenta) Clean modules:'$(clean_node)'$(reset)"
	$(QUIET)$(RM) -r $(clean_node)
clean-bundle:
	$(QUIET)$(echo_dt) "$(magenta) Clean bundle:'$(clean_bundle)'$(reset)"
	$(QUIET)$(RM) -r $(clean_bundle)

dist: clean
	cd .. && tar -cz --exclude-from=dfolio@free/.gitignore \
		-f "$(INSTALL_DIR)/$(TODAY)_dfolio-at-free.tar.gz" "dfolio@free"

VERSION !=$(CAT) VERSION
version:
	$(QUIET)$(call echo-info,"version: v$(VERSION)")
	

