#!/usr/bin/env bash
exit 1
npm install -g @microsoft/rush
rush update
# install release tools
npm install -g dw-azure-track2-js-sdk-release-tools