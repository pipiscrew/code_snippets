//http://stackoverflow.com/a/23158286

@echo off
set /p id="Block ID: "
type nul >%id%en-dev.txt
type nul >%id%en-prod.txt
type nul >%id%gr-dev.txt
type nul >%id%gr-prod.txt
mkdir modded