#!/bin/bash

scriptDir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
databaseDir="$scriptDir/../../infrastructure/mongodb"
databaseDockerfile="$databaseDir/local.docker-compose.yml"
databaseEnvFile="$databaseDir/local.env"

# Spin up local dependencies
docker compose -f $databaseDockerfile --env-file $databaseEnvFile up --build --force-recreate -d

# Run the tests using local dependencies
export PATH=$(npm bin):$PATH
env $(cat "$databaseEnvFile" | xargs) \
  jest --testMatch="<rootDir>/**/*.integration-test.ts" --testTimeout=120000 --runInBand
testExitCode=$?

# Spin down the local dependencies
docker compose -f $databaseDockerfile --env-file $databaseEnvFile down

exit $testExitCode
