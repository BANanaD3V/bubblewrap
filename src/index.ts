/*
 * Copyright 2019 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

'use strict';

const Cli = require('./cli');

module.exports = () => {
  const cli = new Cli();
  const args = process.argv.slice(2);
  // TODO(peconn): Tighten up the `any` below once CLI is typed.
  cli.run(args)
      .catch((err: any) => {
        console.error(err.message);
        process.exit(1);
      });
};
