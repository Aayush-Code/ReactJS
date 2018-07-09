import * as types from './actionTypes';
import Constants from '../constants/constants';


export function onDemoClick(){
    return{
        type: types.DEMO_SCREEN,
        nextPage: Constants.VQA_DEMO
    };
}

export function onEvaluateClick(){
    return{
        type: types.EVALUATE_SCREEN,
        nextPage: Constants.VQA_EVALUATE
    };
}

export function onRecentsClick(){
    return{
        type: types.RECENTS_SCREEN,
        nextPage: Constants.VQA_RECENTS
    };
}

export function setVideoDirectory(videoDirectory, fileName){
    return{
        type: types.SET_VIDEO_DIR,
        videoDir: videoDirectory,
        fileName: fileName
    }
}

export function setActiveSteps(value){
    return{
        type: types.SET_ACTIVE_STEPS,
        value: value,
    }
}