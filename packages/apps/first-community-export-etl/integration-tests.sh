#!/bin/bash

scriptDir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
databaseDir="$scriptDir/../../integration-testing/mongodb"
databaseDockerfile="$databaseDir/local.docker-compose.yml"
databaseEnvFile="$databaseDir/local.env"

# Spin up local dependencies
docker compose -f $databaseDockerfile --env-file $databaseEnvFile up --build --force-recreate -d

# Run the tests using local dependencies
export PATH=$(npm bin):$PATH
# Special handling to get the "package" directory regardless of where the script was initiated
package=$(basename $scriptDir)
env $(cat "$databaseEnvFile" | xargs) \
  jest --testMatch="<rootDir>/$package/**/*.integration-test.ts" --testTimeout=120000 --runInBand
testExitCode=$?

# Spin down the local dependencies
docker compose -f $databaseDockerfile --env-file $databaseEnvFile down

exit $testExitCode
