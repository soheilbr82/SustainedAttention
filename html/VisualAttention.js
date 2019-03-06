/***************** 
 * Untitled Test *
 *****************/

import { PsychoJS } from './lib/core-3.0.1.js';
import * as core from './lib/core-3.0.1.js';
import { TrialHandler } from './lib/data-3.0.1.js';
import { Scheduler } from './lib/util-3.0.1.js';
import * as util from './lib/util-3.0.1.js';
import * as visual from './lib/visual-3.0.1.js';
import { Sound } from './lib/sound-3.0.1.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initRoutineBegin);
flowScheduler.add(initRoutineEachFrame);
flowScheduler.add(initRoutineEnd);
flowScheduler.add(descriptionRoutineBegin);
flowScheduler.add(descriptionRoutineEachFrame);
flowScheduler.add(descriptionRoutineEnd);
flowScheduler.add(instructionsRoutineBegin);
flowScheduler.add(instructionsRoutineEachFrame);
flowScheduler.add(instructionsRoutineEnd);
flowScheduler.add(startWait3000RoutineBegin);
flowScheduler.add(startWait3000RoutineEachFrame);
flowScheduler.add(startWait3000RoutineEnd);
const BlockListIterationLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BlockListIterationLoopBegin, BlockListIterationLoopScheduler);
flowScheduler.add(BlockListIterationLoopScheduler);
flowScheduler.add(BlockListIterationLoopEnd);
flowScheduler.add(endRoutineBegin);
flowScheduler.add(endRoutineEachFrame);
flowScheduler.add(endRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.1';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('completedURL', 'incompleteURL');

  return Scheduler.Event.NEXT;
}

var initClock;
var descriptionClock;
var polygon;
var descriptionText;
var instructionsClock;
var instructionScreen;
var instructionText;
var startWait3000Clock;
var preTrialScreen;
var preTrialText;
var randClock;
var dirClock;
var text_2;
var trialStimuliClock;
var TrialScreen;
var trialImage1;
var trialImage2;
var trialLeftText;
var trialRightText;
var waitRandClock;
var interTrialScreen;
var whiteScreen_2;
var interTrialText;
var interBlockClock;
var interBlockScreen;
var interBlockText;
var endClock;
var polygon_2;
var text;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "init"
  initClock = new util.Clock();
  
  // Initialize components for Routine "description"
  descriptionClock = new util.Clock();
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  descriptionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'descriptionText',
    text: "Please determine whether the Male or Female image is shown\n\nPress '`' on the left corner of keyboard if it is a 'Male' face\n\n\nPress '-' on the right corner of keyboard if it is a 'Female' face\n",
    font: 'Arial',
    pos: [0, 0], height: 0.12,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructionScreen = new visual.Rect ({
    win: psychoJS.window, name: 'instructionScreen',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  instructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionText',
    text: "Please make sure the lab recorder is up and running.\n\nSelect the 'Keyboard' and 'EEG' stream to be recorded, navigate to a folder and push 'Start' button on the labRecorder.",
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "startWait3000"
  startWait3000Clock = new util.Clock();
  preTrialScreen = new visual.Rect ({
    win: psychoJS.window, name: 'preTrialScreen',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  preTrialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'preTrialText',
    text: '',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  
  // Initialize components for Routine "rand"
  randClock = new util.Clock();
  
  // Initialize components for Routine "dir"
  dirClock = new util.Clock();
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trialStimuli"
  trialStimuliClock = new util.Clock();
  
  TrialScreen = new visual.Rect ({
    win: psychoJS.window, name: 'TrialScreen',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  trialImage1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialImage1', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color('white'), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  trialImage2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialImage2', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 0.5,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  trialLeftText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialLeftText',
    text: 'default text',
    font: 'Arial',
    pos: [(- 0.8), 0], height: 0.1,  wrapWidth: undefined, ori: 270,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  trialRightText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialRightText',
    text: 'default text',
    font: 'Arial',
    pos: [0.8, 0], height: 0.1,  wrapWidth: undefined, ori: 90,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  
  // Initialize components for Routine "waitRand"
  waitRandClock = new util.Clock();
  interTrialScreen = new visual.Rect ({
    win: psychoJS.window, name: 'interTrialScreen',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  whiteScreen_2 = new visual.Rect ({
    win: psychoJS.window, name: 'whiteScreen_2',
    units: psychoJS.window.units,
    width: pictureSize[0], height: pictureSize[1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  interTrialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'interTrialText',
    text: 'default text',
    font: 'Arial',
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "interBlock"
  interBlockClock = new util.Clock();
  interBlockScreen = new visual.Rect ({
    win: psychoJS.window, name: 'interBlockScreen',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  interBlockText = new visual.TextStim({
    win: psychoJS.window,
    name: 'interBlockText',
    text: '+',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2',
    units: psychoJS.window.units,
    width: [2, 2][0], height: [2, 2][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Thank you for your participation!',
    font: 'Arial',
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var initComponents;
function initRoutineBegin() {
  //------Prepare to start Routine 'init'-------
  t = 0;
  initClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  // keep track of which components have finished
  initComponents = [];
  
  for (const thisComponent of initComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function initRoutineEachFrame() {
  //------Loop for each frame of Routine 'init'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = initClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of initComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function initRoutineEnd() {
  //------Ending Routine 'init'-------
  for (const thisComponent of initComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // the Routine "init" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var key_resp_2;
var descriptionComponents;
function descriptionRoutineBegin() {
  //------Prepare to start Routine 'description'-------
  t = 0;
  descriptionClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  descriptionComponents = [];
  descriptionComponents.push(polygon);
  descriptionComponents.push(descriptionText);
  descriptionComponents.push(key_resp_2);
  
  for (const thisComponent of descriptionComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function descriptionRoutineEachFrame() {
  //------Loop for each frame of Routine 'description'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = descriptionClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *polygon* updates
  if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon.tStart = t;  // (not accounting for frame time here)
    polygon.frameNStart = frameN;  // exact frame index
    polygon.setAutoDraw(true);
  }

  
  // *descriptionText* updates
  if (t >= 0.0 && descriptionText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    descriptionText.tStart = t;  // (not accounting for frame time here)
    descriptionText.frameNStart = frameN;  // exact frame index
    descriptionText.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of descriptionComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function descriptionRoutineEnd() {
  //------Ending Routine 'description'-------
  for (const thisComponent of descriptionComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(key_resp_2.keys) >= 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  // the Routine "description" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var keyPressRun;
var instructionsComponents;
function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  t = 0;
  instructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instructionText.setPos([0, 0]);
  keyPressRun = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  instructionsComponents = [];
  instructionsComponents.push(instructionScreen);
  instructionsComponents.push(instructionText);
  instructionsComponents.push(keyPressRun);
  
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructionScreen* updates
  if (t >= 0.0 && instructionScreen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructionScreen.tStart = t;  // (not accounting for frame time here)
    instructionScreen.frameNStart = frameN;  // exact frame index
    instructionScreen.setAutoDraw(true);
  }

  
  // *instructionText* updates
  if (t >= 0.0 && instructionText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructionText.tStart = t;  // (not accounting for frame time here)
    instructionText.frameNStart = frameN;  // exact frame index
    instructionText.setAutoDraw(true);
  }

  
  // *keyPressRun* updates
  if (t >= 0.0 && keyPressRun.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    keyPressRun.tStart = t;  // (not accounting for frame time here)
    keyPressRun.frameNStart = frameN;  // exact frame index
    keyPressRun.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { keyPressRun.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (keyPressRun.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      keyPressRun.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      keyPressRun.rt = keyPressRun.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  for (const thisComponent of instructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(keyPressRun.keys) >= 0) {    // No response was made
      keyPressRun.keys = undefined;
  }
  
  psychoJS.experiment.addData('keyPressRun.keys', keyPressRun.keys);
  if (typeof keyPressRun.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('keyPressRun.rt', keyPressRun.rt);
      routineTimer.reset();
      }
  
  // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var startWait3000Components;
function startWait3000RoutineBegin() {
  //------Prepare to start Routine 'startWait3000'-------
  t = 0;
  startWait3000Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  
  // keep track of which components have finished
  startWait3000Components = [];
  startWait3000Components.push(preTrialScreen);
  startWait3000Components.push(preTrialText);
  
  for (const thisComponent of startWait3000Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function startWait3000RoutineEachFrame() {
  //------Loop for each frame of Routine 'startWait3000'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = startWait3000Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *preTrialScreen* updates
  if (t >= 0.0 && preTrialScreen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    preTrialScreen.tStart = t;  // (not accounting for frame time here)
    preTrialScreen.frameNStart = frameN;  // exact frame index
    preTrialScreen.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (preTrialScreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    preTrialScreen.setAutoDraw(false);
  }
  
  // *preTrialText* updates
  if (t >= 0.0 && preTrialText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    preTrialText.tStart = t;  // (not accounting for frame time here)
    preTrialText.frameNStart = frameN;  // exact frame index
    preTrialText.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (preTrialText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    preTrialText.setAutoDraw(false);
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of startWait3000Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function startWait3000RoutineEnd() {
  //------Ending Routine 'startWait3000'-------
  for (const thisComponent of startWait3000Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var BlockListIteration;
function BlockListIterationLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  BlockListIteration = new TrialHandler({
    psychoJS,
    nReps: num_blocks, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'BlockListIteration'});
  psychoJS.experiment.addLoop(BlockListIteration); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisBlockListIteration of BlockListIteration) {
    thisScheduler.add(importConditions(BlockListIteration));
    thisScheduler.add(randRoutineBegin);
    thisScheduler.add(randRoutineEachFrame);
    thisScheduler.add(randRoutineEnd);
    thisScheduler.add(dirRoutineBegin);
    thisScheduler.add(dirRoutineEachFrame);
    thisScheduler.add(dirRoutineEnd);
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(interBlockRoutineBegin);
    thisScheduler.add(interBlockRoutineEachFrame);
    thisScheduler.add(interBlockRoutineEnd);
  }

  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: num_trials, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialStimuliRoutineBegin);
    thisScheduler.add(trialStimuliRoutineEachFrame);
    thisScheduler.add(trialStimuliRoutineEnd);
    thisScheduler.add(waitRandRoutineBegin);
    thisScheduler.add(waitRandRoutineEachFrame);
    thisScheduler.add(waitRandRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function BlockListIterationLoopEnd() {
  psychoJS.experiment.removeLoop(BlockListIteration);

  return Scheduler.Event.NEXT;
}

var randComponents;
function randRoutineBegin() {
  //------Prepare to start Routine 'rand'-------
  t = 0;
  randClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  // keep track of which components have finished
  randComponents = [];
  
  for (const thisComponent of randComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function randRoutineEachFrame() {
  //------Loop for each frame of Routine 'rand'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = randClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of randComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function randRoutineEnd() {
  //------Ending Routine 'rand'-------
  for (const thisComponent of randComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // the Routine "rand" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var dirComponents;
function dirRoutineBegin() {
  //------Prepare to start Routine 'dir'-------
  t = 0;
  dirClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  
  text_2.setText(dirString);
  // keep track of which components have finished
  dirComponents = [];
  dirComponents.push(text_2);
  
  for (const thisComponent of dirComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function dirRoutineEachFrame() {
  //------Loop for each frame of Routine 'dir'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = dirClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_2.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of dirComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function dirRoutineEnd() {
  //------Ending Routine 'dir'-------
  for (const thisComponent of dirComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  return Scheduler.Event.NEXT;
}

var keyPressTrial;
var trialStimuliComponents;
function trialStimuliRoutineBegin() {
  //------Prepare to start Routine 'trialStimuli'-------
  t = 0;
  trialStimuliClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  trialImage1.setColor(new util.Color('white'));
  trialImage1.setOpacity(1);
  trialImage1.setSize(pictureSize);
  trialImage1.setImage(Face[trialCounter]);
  trialImage2.setSize(pictureSize);
  trialImage2.setImage(Scene[trialCounter]);
  trialLeftText.setText(leftLabel);
  trialRightText.setText(rightLabel);
  keyPressTrial = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  trialStimuliComponents = [];
  trialStimuliComponents.push(TrialScreen);
  trialStimuliComponents.push(trialImage1);
  trialStimuliComponents.push(trialImage2);
  trialStimuliComponents.push(trialLeftText);
  trialStimuliComponents.push(trialRightText);
  trialStimuliComponents.push(keyPressTrial);
  
  for (const thisComponent of trialStimuliComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialStimuliRoutineEachFrame() {
  //------Loop for each frame of Routine 'trialStimuli'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialStimuliClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *TrialScreen* updates
  if (t >= 0.0 && TrialScreen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    TrialScreen.tStart = t;  // (not accounting for frame time here)
    TrialScreen.frameNStart = frameN;  // exact frame index
    TrialScreen.setAutoDraw(true);
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (TrialScreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    TrialScreen.setAutoDraw(false);
  }
  
  // *trialImage1* updates
  if (t >= 0.0 && trialImage1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trialImage1.tStart = t;  // (not accounting for frame time here)
    trialImage1.frameNStart = frameN;  // exact frame index
    trialImage1.setAutoDraw(true);
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (trialImage1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    trialImage1.setAutoDraw(false);
  }
  
  // *trialImage2* updates
  if (t >= 0.0 && trialImage2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trialImage2.tStart = t;  // (not accounting for frame time here)
    trialImage2.frameNStart = frameN;  // exact frame index
    trialImage2.setAutoDraw(true);
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (trialImage2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    trialImage2.setAutoDraw(false);
  }
  
  // *trialLeftText* updates
  if (t >= 0.0 && trialLeftText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trialLeftText.tStart = t;  // (not accounting for frame time here)
    trialLeftText.frameNStart = frameN;  // exact frame index
    trialLeftText.setAutoDraw(true);
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (trialLeftText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    trialLeftText.setAutoDraw(false);
  }
  
  // *trialRightText* updates
  if (t >= 0.0 && trialRightText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    trialRightText.tStart = t;  // (not accounting for frame time here)
    trialRightText.frameNStart = frameN;  // exact frame index
    trialRightText.setAutoDraw(true);
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (trialRightText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    trialRightText.setAutoDraw(false);
  }
  
  // *keyPressTrial* updates
  if (t >= 0.0 && keyPressTrial.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    keyPressTrial.tStart = t;  // (not accounting for frame time here)
    keyPressTrial.frameNStart = frameN;  // exact frame index
    keyPressTrial.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { keyPressTrial.clock.reset(); }); // t = 0 on screen flip
  }

  frameRemains = 0.0 + trialDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (keyPressTrial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    keyPressTrial.status = PsychoJS.Status.FINISHED;
  }

  if (keyPressTrial.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (keyPressTrial.keys.length === 0) {  // then this was the first keypress
        keyPressTrial.keys = theseKeys[0];  // just the first key pressed
        keyPressTrial.rt = keyPressTrial.clock.getTime();
      }
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialStimuliComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialStimuliRoutineEnd() {
  //------Ending Routine 'trialStimuli'-------
  for (const thisComponent of trialStimuliComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  
  // check responses
  if (['', [], undefined].indexOf(keyPressTrial.keys) >= 0) {    // No response was made
      keyPressTrial.keys = undefined;
  }
  
  psychoJS.experiment.addData('keyPressTrial.keys', keyPressTrial.keys);
  if (typeof keyPressTrial.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('keyPressTrial.rt', keyPressTrial.rt);
      }
  
  
  // the Routine "trialStimuli" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var waitRandComponents;
function waitRandRoutineBegin() {
  //------Prepare to start Routine 'waitRand'-------
  t = 0;
  waitRandClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  whiteScreen_2.setSize(pictureSize);
  interTrialText.setText('+');
  // keep track of which components have finished
  waitRandComponents = [];
  waitRandComponents.push(interTrialScreen);
  waitRandComponents.push(whiteScreen_2);
  waitRandComponents.push(interTrialText);
  
  for (const thisComponent of waitRandComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function waitRandRoutineEachFrame() {
  //------Loop for each frame of Routine 'waitRand'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = waitRandClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *interTrialScreen* updates
  if (t >= 0.0 && interTrialScreen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    interTrialScreen.tStart = t;  // (not accounting for frame time here)
    interTrialScreen.frameNStart = frameN;  // exact frame index
    interTrialScreen.setAutoDraw(true);
  }

  frameRemains = 0.0 + ITR[trialCounter] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (interTrialScreen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    interTrialScreen.setAutoDraw(false);
  }
  
  // *whiteScreen_2* updates
  if (t >= 0.0 && whiteScreen_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    whiteScreen_2.tStart = t;  // (not accounting for frame time here)
    whiteScreen_2.frameNStart = frameN;  // exact frame index
    whiteScreen_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + ITR[trialCounter] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (whiteScreen_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    whiteScreen_2.setAutoDraw(false);
  }
  
  // *interTrialText* updates
  if (t >= 0.0 && interTrialText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    interTrialText.tStart = t;  // (not accounting for frame time here)
    interTrialText.frameNStart = frameN;  // exact frame index
    interTrialText.setAutoDraw(true);
  }

  frameRemains = 0.0 + ITR[trialCounter] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (interTrialText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    interTrialText.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of waitRandComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function waitRandRoutineEnd() {
  //------Ending Routine 'waitRand'-------
  for (const thisComponent of waitRandComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "waitRand" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var keyPressNextBlock;
var interBlockComponents;
function interBlockRoutineBegin() {
  //------Prepare to start Routine 'interBlock'-------
  t = 0;
  interBlockClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  keyPressNextBlock = new core.BuilderKeyResponse(psychoJS);
  
  // keep track of which components have finished
  interBlockComponents = [];
  interBlockComponents.push(interBlockScreen);
  interBlockComponents.push(interBlockText);
  interBlockComponents.push(keyPressNextBlock);
  
  for (const thisComponent of interBlockComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function interBlockRoutineEachFrame() {
  //------Loop for each frame of Routine 'interBlock'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = interBlockClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *interBlockScreen* updates
  if (t >= 0.0 && interBlockScreen.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    interBlockScreen.tStart = t;  // (not accounting for frame time here)
    interBlockScreen.frameNStart = frameN;  // exact frame index
    interBlockScreen.setAutoDraw(true);
  }

  
  // *interBlockText* updates
  if (t >= 0.0 && interBlockText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    interBlockText.tStart = t;  // (not accounting for frame time here)
    interBlockText.frameNStart = frameN;  // exact frame index
    interBlockText.setAutoDraw(true);
  }

  
  // *keyPressNextBlock* updates
  if (t >= 0.0 && keyPressNextBlock.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    keyPressNextBlock.tStart = t;  // (not accounting for frame time here)
    keyPressNextBlock.frameNStart = frameN;  // exact frame index
    keyPressNextBlock.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { keyPressNextBlock.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (keyPressNextBlock.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      keyPressNextBlock.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      keyPressNextBlock.rt = keyPressNextBlock.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of interBlockComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function interBlockRoutineEnd() {
  //------Ending Routine 'interBlock'-------
  for (const thisComponent of interBlockComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(keyPressNextBlock.keys) >= 0) {    // No response was made
      keyPressNextBlock.keys = undefined;
  }
  
  psychoJS.experiment.addData('keyPressNextBlock.keys', keyPressNextBlock.keys);
  if (typeof keyPressNextBlock.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('keyPressNextBlock.rt', keyPressNextBlock.rt);
      routineTimer.reset();
      }
  
  
  // the Routine "interBlock" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var endComponents;
function endRoutineBegin() {
  //------Prepare to start Routine 'end'-------
  t = 0;
  endClock.reset(); // clock
  frameN = -1;
  routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  endComponents = [];
  endComponents.push(polygon_2);
  endComponents.push(text);
  
  for (const thisComponent of endComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function endRoutineEachFrame() {
  //------Loop for each frame of Routine 'end'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = endClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *polygon_2* updates
  if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon_2.tStart = t;  // (not accounting for frame time here)
    polygon_2.frameNStart = frameN;  // exact frame index
    polygon_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    polygon_2.setAutoDraw(false);
  }
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of endComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEnd() {
  //------Ending Routine 'end'-------
  for (const thisComponent of endComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
