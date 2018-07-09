import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function Reducer(state = initialState.store, action) {
    switch (action.type) {

        case types.DEMO_SCREEN:
            return Object.assign({}, state, {
                "CurrentPage": action.nextPage,
                "SideMenu": { "demoClicked": true }
            });

        case types.EVALUATE_SCREEN:
            return Object.assign({}, state, {
                "CurrentPage": action.nextPage,
                "SideMenu": { "evaluateClicked": true }
            });


        case types.RECENTS_SCREEN:
            return Object.assign({}, state, {
                "CurrentPage": action.nextPage,
                "SideMenu": { "recentsClicked": true }
            });


        case types.SET_VIDEO_DIR:
            return Object.assign({}, state, {
                "VideoDirectory": action.videoDir,
                "VideoName": action.fileName,
                "ExtractFolderName": ""
            });

        case types.SET_ACTIVE_STEPS:
            return Object.assign({}, state, {
                "activeSteps": action.value
            });

        default:
            return state;
    }
}


