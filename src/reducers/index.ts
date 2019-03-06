// Copyright 2018 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import app from './app.reducer';
import projects from './projects.reducer';
import settings from './settings.reducer';
import panels from './panels.reducer';
import panes from './panes.reducer';
import explorer from './explorer.reducer';
import ipfs from './ipfs.reducer';
import auth from './auth.reducer';
import toast from './toast.reducer';
import user from './user.reducer';
import view from './view.reducer';
import compiler from './compiler.reducer';
import console from './console.reducer';
import modal from './modal.reducer';
import { AnyAction } from 'redux';

const rehydrated = (state = false, action: AnyAction) => {
    switch (action.type) {
        case 'persist/REHYDRATE':
            return true;
        default:
            return state;
    }
};

export default {
    rehydrated,
    app,
    settings,
    projects,
    panes,
    ipfs,
    auth,
    toast,
    panels,
    explorer,
    user,
    view,
    compiler,
    console,
    modal
};