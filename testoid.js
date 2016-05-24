'use strict';

import {List, Map} from 'immutable';
import {next} from './src/core';


var gorn = new Map({entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')});

console.log(next(gorn));