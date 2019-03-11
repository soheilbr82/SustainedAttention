#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.0.1),
    on March 11, 2019, at 15:09
If you publish work using this script please cite the PsychoPy publications:
    Peirce, JW (2007) PsychoPy - Psychophysics software in Python.
        Journal of Neuroscience Methods, 162(1-2), 8-13.
    Peirce, JW (2009) Generating stimuli for neuroscience using PsychoPy.
        Frontiers in Neuroinformatics, 2:10. doi: 10.3389/neuro.11.010.2008
"""

from __future__ import absolute_import, division
from psychopy import locale_setup, sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)
import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.0.1'
expName = 'untitled'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\Projects\\VisualAttentionPlatform_Psychopy\\SustainedAttention_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1200], fullscr=True, screen=1,
    allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True)
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Initialize components for Routine "init"
initClock = core.Clock()
# Add random and excel library
import random, xlrd, os, sys
from PIL import Image

#sys.path.append('./lib/')

# Open LabRecorder
#os.startfile(".\lib\LabRecorder\LabRecorder.exe")




# Add lsl keypress markers
from pylsl import StreamInfo, StreamOutlet
info = StreamInfo(name='Keyboard', type='Markers', channel_count=1,
                  channel_format='string', source_id='Keyboard')
# Initialize the keyboard stream.
outlet = StreamOutlet(info)



currentTime = expInfo['date']
subjectID = expInfo['participant']
Labrecorder = '.\lib\LabRecorder\LabRecorderCLI.exe'
Dataset='.\Dataset'

# Open LabRecorder
import subprocess, sys, os, winpexpect, time
#os.system("start /B start cmd.exe @cmd /k .\lib\LabRecorder\LabRecorderCLI.exe .\Dataset\'currentTime'.xdf 'type=EEG'")
#os.system("start /B start cmd.exe @cmd /k %s %s\%s_%s 'type=EEG'" % (Labrecorder, Dataset, currentTime,subjectID))
child =  winpexpect.winspawn('%s %s\%s_%s \'name="Keyboard"\'' % (Labrecorder,Dataset,currentTime,subjectID))





# Fix random seed
random.seed()

# Read stimuli excel file
infile = './listStim.xlsx'

# Number of stimuli and number of blocks
num_trials = 10
num_blocks = 8

trialCounter=0
blockCounter=0

# Duration of a trial
trialDuration = 1


# Size of picture
pictureSize=[1.5,1.5]


# Initialize components for Routine "description"
descriptionClock = core.Clock()
polygon = visual.Rect(
    win=win, name='polygon',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
descriptionText = visual.TextStim(win=win, name='descriptionText',
    text="Please determine whether the Male or Female image is shown\n\nPress '`' on the left corner of keyboard if it is a 'Male' face\n\n\nPress '-' on the right corner of keyboard if it is a 'Female' face\n",
    font='Arial',
    pos=(0, 0), height=0.12, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
instructionScreen = visual.Rect(
    win=win, name='instructionScreen',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
instructionText = visual.TextStim(win=win, name='instructionText',
    text="Please make sure the lab recorder is up and running.\n\nSelect the 'Keyboard' and 'EEG' stream to be recorded, navigate to a folder and push 'Start' button on the labRecorder.",
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "startWait3000"
startWait3000Clock = core.Clock()
preTrialScreen = visual.Rect(
    win=win, name='preTrialScreen',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
preTrialText = visual.TextStim(win=win, name='preTrialText',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);


# Initialize components for Routine "rand"
randClock = core.Clock()


# Initialize components for Routine "dir"
dirClock = core.Clock()

text_2 = visual.TextStim(win=win, name='text_2',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "trialStimuli"
trialStimuliClock = core.Clock()

TrialScreen = visual.Rect(
    win=win, name='TrialScreen',
    width=[2,2][0], height=[2,2][1],
    ori=0, pos=[0, 0],
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
trialImage1 = visual.ImageStim(
    win=win, name='trialImage1',
    image='sin', mask=None,
    ori=0, pos=(0,0), size=1.0,
    color='white', colorSpace='rgb', opacity=1.0,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
trialImage2 = visual.ImageStim(
    win=win, name='trialImage2',
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=0.5,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
trialLeftText = visual.TextStim(win=win, name='trialLeftText',
    text='default text',
    font='Arial',
    pos=(-0.8, 0), height=0.1, wrapWidth=None, ori=270, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
trialRightText = visual.TextStim(win=win, name='trialRightText',
    text='default text',
    font='Arial',
    pos=(0.8, 0), height=0.1, wrapWidth=None, ori=90, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);


# Initialize components for Routine "waitRand"
waitRandClock = core.Clock()
interTrialScreen = visual.Rect(
    win=win, name='interTrialScreen',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
whiteScreen_2 = visual.Rect(
    win=win, name='whiteScreen_2',
    width=(1.0, 1.0)[0], height=(1.0, 1.0)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
interTrialText = visual.TextStim(win=win, name='interTrialText',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.2, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "interBlock"
interBlockClock = core.Clock()
interBlockScreen = visual.Rect(
    win=win, name='interBlockScreen',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
interBlockText = visual.TextStim(win=win, name='interBlockText',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);


# Initialize components for Routine "end"
endClock = core.Clock()
polygon_2 = visual.Rect(
    win=win, name='polygon_2',
    width=(2, 2)[0], height=(2, 2)[1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor='black', lineColorSpace='rgb',
    fillColor='black', fillColorSpace='rgb',
    opacity=1, depth=0.0, interpolate=True)
text = visual.TextStim(win=win, name='text',
    text='Thank you for your participation!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);


# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "init"-------
t = 0
initClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat

# keep track of which components have finished
initComponents = []
for thisComponent in initComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "init"-------
while continueRoutine:
    # get current time
    t = initClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in initComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "init"-------
for thisComponent in initComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# the Routine "init" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "description"-------
t = 0
descriptionClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
key_resp_2 = event.BuilderKeyResponse()
# keep track of which components have finished
descriptionComponents = [polygon, descriptionText, key_resp_2]
for thisComponent in descriptionComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "description"-------
while continueRoutine:
    # get current time
    t = descriptionClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *polygon* updates
    if t >= 0.0 and polygon.status == NOT_STARTED:
        # keep track of start time/frame for later
        polygon.tStart = t
        polygon.frameNStart = frameN  # exact frame index
        polygon.setAutoDraw(True)
    
    # *descriptionText* updates
    if t >= 0.0 and descriptionText.status == NOT_STARTED:
        # keep track of start time/frame for later
        descriptionText.tStart = t
        descriptionText.frameNStart = frameN  # exact frame index
        descriptionText.setAutoDraw(True)
    
    # *key_resp_2* updates
    if t >= 0.0 and key_resp_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        key_resp_2.tStart = t
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if key_resp_2.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            key_resp_2.keys = theseKeys[-1]  # just the last key pressed
            key_resp_2.rt = key_resp_2.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in descriptionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "description"-------
for thisComponent in descriptionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys=None
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# the Routine "description" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
t = 0
instructionsClock.reset()  # clock
frameN = -1
continueRoutine = True
# update component parameters for each repeat
instructionText.setPos((0, 0))
keyPressRun = event.BuilderKeyResponse()
# keep track of which components have finished
instructionsComponents = [instructionScreen, instructionText, keyPressRun]
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructionScreen* updates
    if t >= 0.0 and instructionScreen.status == NOT_STARTED:
        # keep track of start time/frame for later
        instructionScreen.tStart = t
        instructionScreen.frameNStart = frameN  # exact frame index
        instructionScreen.setAutoDraw(True)
    
    # *instructionText* updates
    if t >= 0.0 and instructionText.status == NOT_STARTED:
        # keep track of start time/frame for later
        instructionText.tStart = t
        instructionText.frameNStart = frameN  # exact frame index
        instructionText.setAutoDraw(True)
    
    # *keyPressRun* updates
    if t >= 0.0 and keyPressRun.status == NOT_STARTED:
        # keep track of start time/frame for later
        keyPressRun.tStart = t
        keyPressRun.frameNStart = frameN  # exact frame index
        keyPressRun.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(keyPressRun.clock.reset)  # t=0 on next screen flip
        event.clearEvents(eventType='keyboard')
    if keyPressRun.status == STARTED:
        theseKeys = event.getKeys(keyList=['space'])
        
        # check for quit:
        if "escape" in theseKeys:
            endExpNow = True
        if len(theseKeys) > 0:  # at least one key was pressed
            keyPressRun.keys = theseKeys[-1]  # just the last key pressed
            keyPressRun.rt = keyPressRun.clock.getTime()
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if keyPressRun.keys in ['', [], None]:  # No response was made
    keyPressRun.keys=None
thisExp.addData('keyPressRun.keys',keyPressRun.keys)
if keyPressRun.keys != None:  # we had a response
    thisExp.addData('keyPressRun.rt', keyPressRun.rt)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "startWait3000"-------
t = 0
startWait3000Clock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(3.000000)
# update component parameters for each repeat
# Send experiment onset marker to LSL
outlet.push_sample('S')

# print marker
print('S')
# keep track of which components have finished
startWait3000Components = [preTrialScreen, preTrialText]
for thisComponent in startWait3000Components:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "startWait3000"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = startWait3000Clock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *preTrialScreen* updates
    if t >= 0.0 and preTrialScreen.status == NOT_STARTED:
        # keep track of start time/frame for later
        preTrialScreen.tStart = t
        preTrialScreen.frameNStart = frameN  # exact frame index
        preTrialScreen.setAutoDraw(True)
    frameRemains = 0.0 + 3.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if preTrialScreen.status == STARTED and t >= frameRemains:
        preTrialScreen.setAutoDraw(False)
    
    # *preTrialText* updates
    if t >= 0.0 and preTrialText.status == NOT_STARTED:
        # keep track of start time/frame for later
        preTrialText.tStart = t
        preTrialText.frameNStart = frameN  # exact frame index
        preTrialText.setAutoDraw(True)
    frameRemains = 0.0 + 3.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if preTrialText.status == STARTED and t >= frameRemains:
        preTrialText.setAutoDraw(False)
    
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in startWait3000Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "startWait3000"-------
for thisComponent in startWait3000Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)


# set up handler to look after randomisation of conditions etc
BlockListIteration = data.TrialHandler(nReps=num_blocks, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='BlockListIteration')
thisExp.addLoop(BlockListIteration)  # add the loop to the experiment
thisBlockListIteration = BlockListIteration.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlockListIteration.rgb)
if thisBlockListIteration != None:
    for paramName in thisBlockListIteration:
        exec('{} = thisBlockListIteration[paramName]'.format(paramName))

for thisBlockListIteration in BlockListIteration:
    currentLoop = BlockListIteration
    # abbreviate parameter names if possible (e.g. rgb = thisBlockListIteration.rgb)
    if thisBlockListIteration != None:
        for paramName in thisBlockListIteration:
            exec('{} = thisBlockListIteration[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "rand"-------
    t = 0
    randClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    # Add to Counters
    blockCounter=blockCounter+1
    
    #Open the xlsx stimuli file and select the first sheet
    inbook = xlrd.open_workbook(infile)
    insheet = inbook.sheet_by_index(0)
    MaleImages = insheet.col_values(0)
    FemaleImages = insheet.col_values(1)
    IndoorImages = insheet.col_values(2)
    OutdoorImages = insheet.col_values(3)
    Image1 = insheet.col_values(4)
    Image2 = insheet.col_values(5)
    ImageList1 = insheet.col_values(6)
    ImageList2 = insheet.col_values(7)
    ImageList3 = insheet.col_values(8)
    ImageList4 = insheet.col_values(9)
    
    
    
    # Male Stimuli
    str1=ImageList1[0]
    idx1 = str1.split(":")
    idxFirst1 = int(idx1[0])
    idxLast1 = int(idx1[1])
    
    # Female stimuli
    str2=ImageList2[0]
    idx2 = str2.split(":")
    idxFirst2 = int(idx2[0])
    idxLast2 = int(idx2[1])
    
    
    # Indoor Stimuli
    str3=ImageList3[0]
    idx3 = str3.split(":")
    idxFirst3 = int(idx3[0])
    idxLast3 = int(idx3[1])
    
    # Outdoor stimuli
    str4=ImageList4[0]
    idx4 = str4.split(":")
    idxFirst4 = int(idx4[0])
    idxLast4 = int(idx4[1])
    
    imMale=MaleImages[idxFirst1:idxLast1]
    imFemale=FemaleImages[idxFirst2:idxLast2]
    imIndoor=IndoorImages[idxFirst3:idxLast3]
    imOutdoor=OutdoorImages[idxFirst4:idxLast4]
    
    
    Range1 = list(range(idxLast1))
    Range2 = list(range(idxLast2))
    Range3 = list(range(idxLast3))
    Range4 = list(range(idxLast4))
    
    #Shuffling
    random.shuffle(Range1) 
    random.shuffle(Range2) 
    random.shuffle(Range3) 
    random.shuffle(Range4) 
    
    
    #Select images
    numType1=int(num_trials/2)
    numType2=num_trials-numType1
    list1 = Range1[0:(numType1+1)]
    selectedImages1 = [imMale[i] for i in list1]
    list2 = Range2[0:(numType2+1)]
    selectedImages2 = [imFemale[i] for i in list2]
    list3 = Range3[0:(numType1+1)]
    selectedImages3 = [imIndoor[i] for i in list3]
    list4 = Range4[0:(numType2+1)]
    selectedImages4 = [imOutdoor[i] for i in list4]
    
    
    #Shuffle subcategories
    Face=selectedImages1 + selectedImages2
    random.shuffle(Face)
    Scene=selectedImages3 + selectedImages4
    random.shuffle(Scene)
    
    
    # Convert to grayscale 
    Face = [Image.open(Face[i]).convert('LA') for i in range(len(Face))]
    Scene = [Image.open(Scene[i]).convert('LA') for i in range(len(Scene))]
    
    #if ((blockCounter==1) or (blockCounter==4) or (blockCounter==7) or (blockCounter==8)):
    #    im1=MaleImages[idxFirst1:idxLast1]
    #    im2=FemaleImages[idxFirst2:idxLast2]
    #elif ((blockCounter==2) or (blockCounter==3) or (blockCounter==5) or (blockCounter==6)):
    #    im1=IndoorImages[idxFirst1:idxLast1]
    #    im2=OutdoorImages[idxFirst2:idxLast2]
    
    
    # Randomize the inter-trial duration
    ITR = list(range(2000,3000,10))
    #ITR = [ITR[i]/1000 for i in range(len(ITR))]
    
    ITR = [i/1000 for i in ITR]
    random.shuffle(ITR)
    
    
    
    # keep track of which components have finished
    randComponents = []
    for thisComponent in randComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "rand"-------
    while continueRoutine:
        # get current time
        t = randClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in randComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "rand"-------
    for thisComponent in randComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    # the Routine "rand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "dir"-------
    t = 0
    dirClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    routineTimer.add(3.000000)
    # update component parameters for each repeat
    leftLabel = Image1[blockCounter-1]
    rightLabel = Image2[blockCounter-1]
    
    #print(leftDirection + " " + rightDirection)
    
    
    dirString = "Press ` for " + leftLabel
    dirString += "\n\nPress - for " + rightLabel
    
    #text_2.setText(
    #"Press '`' on the left corner of keyboard for "
    #+ leftDirection 
    #+ "\n Press '-' on the right corner of keyboard for "
    #+ rightDirection)
    text_2.setText(dirString)
    # keep track of which components have finished
    dirComponents = [text_2]
    for thisComponent in dirComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "dir"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = dirClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        
        # *text_2* updates
        if t >= 0.0 and text_2.status == NOT_STARTED:
            # keep track of start time/frame for later
            text_2.tStart = t
            text_2.frameNStart = frameN  # exact frame index
            text_2.setAutoDraw(True)
        frameRemains = 0.0 + 3- win.monitorFramePeriod * 0.75  # most of one frame period left
        if text_2.status == STARTED and t >= frameRemains:
            text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in dirComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "dir"-------
    for thisComponent in dirComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler(nReps=num_trials, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=[None],
        seed=None, name='trials')
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    for thisTrial in trials:
        currentLoop = trials
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                exec('{} = thisTrial[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "trialStimuli"-------
        t = 0
        trialStimuliClock.reset()  # clock
        frameN = -1
        continueRoutine = True
        # update component parameters for each repeat
        trialCounter=trialCounter+1
        
        
        trialImage1.setColor('white', colorSpace='rgb')
        trialImage1.setOpacity(1)
        trialImage1.setSize(pictureSize)
        trialImage1.setImage(Face[trialCounter])
        trialImage2.setSize(pictureSize)
        trialImage2.setImage(Scene[trialCounter])
        trialLeftText.setText(leftLabel)
        trialRightText.setText(rightLabel)
        keyPressTrial = event.BuilderKeyResponse()
        # Send trial onset marker to LSL
        outlet.push_sample('t')
        PressedYet = 0
        # keep track of which components have finished
        trialStimuliComponents = [TrialScreen, trialImage1, trialImage2, trialLeftText, trialRightText, keyPressTrial]
        for thisComponent in trialStimuliComponents:
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        
        # -------Start Routine "trialStimuli"-------
        while continueRoutine:
            # get current time
            t = trialStimuliClock.getTime()
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            
            # *TrialScreen* updates
            if t >= 0.0 and TrialScreen.status == NOT_STARTED:
                # keep track of start time/frame for later
                TrialScreen.tStart = t
                TrialScreen.frameNStart = frameN  # exact frame index
                TrialScreen.setAutoDraw(True)
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if TrialScreen.status == STARTED and t >= frameRemains:
                TrialScreen.setAutoDraw(False)
            
            # *trialImage1* updates
            if t >= 0.0 and trialImage1.status == NOT_STARTED:
                # keep track of start time/frame for later
                trialImage1.tStart = t
                trialImage1.frameNStart = frameN  # exact frame index
                trialImage1.setAutoDraw(True)
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if trialImage1.status == STARTED and t >= frameRemains:
                trialImage1.setAutoDraw(False)
            
            # *trialImage2* updates
            if t >= 0.0 and trialImage2.status == NOT_STARTED:
                # keep track of start time/frame for later
                trialImage2.tStart = t
                trialImage2.frameNStart = frameN  # exact frame index
                trialImage2.setAutoDraw(True)
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if trialImage2.status == STARTED and t >= frameRemains:
                trialImage2.setAutoDraw(False)
            
            # *trialLeftText* updates
            if t >= 0.0 and trialLeftText.status == NOT_STARTED:
                # keep track of start time/frame for later
                trialLeftText.tStart = t
                trialLeftText.frameNStart = frameN  # exact frame index
                trialLeftText.setAutoDraw(True)
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if trialLeftText.status == STARTED and t >= frameRemains:
                trialLeftText.setAutoDraw(False)
            
            # *trialRightText* updates
            if t >= 0.0 and trialRightText.status == NOT_STARTED:
                # keep track of start time/frame for later
                trialRightText.tStart = t
                trialRightText.frameNStart = frameN  # exact frame index
                trialRightText.setAutoDraw(True)
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if trialRightText.status == STARTED and t >= frameRemains:
                trialRightText.setAutoDraw(False)
            
            # *keyPressTrial* updates
            if t >= 0.0 and keyPressTrial.status == NOT_STARTED:
                # keep track of start time/frame for later
                keyPressTrial.tStart = t
                keyPressTrial.frameNStart = frameN  # exact frame index
                keyPressTrial.status = STARTED
                # keyboard checking is just starting
                win.callOnFlip(keyPressTrial.clock.reset)  # t=0 on next screen flip
            frameRemains = 0.0 + trialDuration- win.monitorFramePeriod * 0.75  # most of one frame period left
            if keyPressTrial.status == STARTED and t >= frameRemains:
                keyPressTrial.status = FINISHED
            if keyPressTrial.status == STARTED:
                theseKeys = event.getKeys()
                
                # check for quit:
                if "escape" in theseKeys:
                    endExpNow = True
                if len(theseKeys) > 0:  # at least one key was pressed
                    if keyPressTrial.keys == []:  # then this was the first keypress
                        keyPressTrial.keys = theseKeys[0]  # just the first key pressed
                        keyPressTrial.rt = keyPressTrial.clock.getTime()
            # Send trial onset marker to LSL
            if ((keyPressTrial.keys) and (not PressedYet)):
                outlet.push_sample(str(keyPressTrial.keys)[0])
                PressedYet = 1
                print(str(keyPressTrial.keys))
            
            # check for quit (typically the Esc key)
            if endExpNow or event.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialStimuliComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trialStimuli"-------
        for thisComponent in trialStimuliComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # check responses
        if keyPressTrial.keys in ['', [], None]:  # No response was made
            keyPressTrial.keys=None
        trials.addData('keyPressTrial.keys',keyPressTrial.keys)
        if keyPressTrial.keys != None:  # we had a response
            trials.addData('keyPressTrial.rt', keyPressTrial.rt)
        
        # the Routine "trialStimuli" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "waitRand"-------
        t = 0
        waitRandClock.reset()  # clock
        frameN = -1
        continueRoutine = True
        # update component parameters for each repeat
        whiteScreen_2.setSize(pictureSize)
        interTrialText.setText('+')
        # keep track of which components have finished
        waitRandComponents = [interTrialScreen, whiteScreen_2, interTrialText]
        for thisComponent in waitRandComponents:
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        
        # -------Start Routine "waitRand"-------
        while continueRoutine:
            # get current time
            t = waitRandClock.getTime()
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *interTrialScreen* updates
            if t >= 0.0 and interTrialScreen.status == NOT_STARTED:
                # keep track of start time/frame for later
                interTrialScreen.tStart = t
                interTrialScreen.frameNStart = frameN  # exact frame index
                interTrialScreen.setAutoDraw(True)
            frameRemains = 0.0 + ITR[trialCounter]- win.monitorFramePeriod * 0.75  # most of one frame period left
            if interTrialScreen.status == STARTED and t >= frameRemains:
                interTrialScreen.setAutoDraw(False)
            
            # *whiteScreen_2* updates
            if t >= 0.0 and whiteScreen_2.status == NOT_STARTED:
                # keep track of start time/frame for later
                whiteScreen_2.tStart = t
                whiteScreen_2.frameNStart = frameN  # exact frame index
                whiteScreen_2.setAutoDraw(True)
            frameRemains = 0.0 + ITR[trialCounter]- win.monitorFramePeriod * 0.75  # most of one frame period left
            if whiteScreen_2.status == STARTED and t >= frameRemains:
                whiteScreen_2.setAutoDraw(False)
            
            # *interTrialText* updates
            if t >= 0.0 and interTrialText.status == NOT_STARTED:
                # keep track of start time/frame for later
                interTrialText.tStart = t
                interTrialText.frameNStart = frameN  # exact frame index
                interTrialText.setAutoDraw(True)
            frameRemains = 0.0 + ITR[trialCounter]- win.monitorFramePeriod * 0.75  # most of one frame period left
            if interTrialText.status == STARTED and t >= frameRemains:
                interTrialText.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or event.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in waitRandComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "waitRand"-------
        for thisComponent in waitRandComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "waitRand" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed num_trials repeats of 'trials'
    
    
    # ------Prepare to start Routine "interBlock"-------
    t = 0
    interBlockClock.reset()  # clock
    frameN = -1
    continueRoutine = True
    # update component parameters for each repeat
    keyPressNextBlock = event.BuilderKeyResponse()
    outlet.push_sample('E')
    
    # Reset counter of trials
    trialCounter=0
    # keep track of which components have finished
    interBlockComponents = [interBlockScreen, interBlockText, keyPressNextBlock]
    for thisComponent in interBlockComponents:
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    
    # -------Start Routine "interBlock"-------
    while continueRoutine:
        # get current time
        t = interBlockClock.getTime()
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *interBlockScreen* updates
        if t >= 0.0 and interBlockScreen.status == NOT_STARTED:
            # keep track of start time/frame for later
            interBlockScreen.tStart = t
            interBlockScreen.frameNStart = frameN  # exact frame index
            interBlockScreen.setAutoDraw(True)
        
        # *interBlockText* updates
        if t >= 0.0 and interBlockText.status == NOT_STARTED:
            # keep track of start time/frame for later
            interBlockText.tStart = t
            interBlockText.frameNStart = frameN  # exact frame index
            interBlockText.setAutoDraw(True)
        
        # *keyPressNextBlock* updates
        if t >= 0.0 and keyPressNextBlock.status == NOT_STARTED:
            # keep track of start time/frame for later
            keyPressNextBlock.tStart = t
            keyPressNextBlock.frameNStart = frameN  # exact frame index
            keyPressNextBlock.status = STARTED
            # keyboard checking is just starting
            win.callOnFlip(keyPressNextBlock.clock.reset)  # t=0 on next screen flip
            event.clearEvents(eventType='keyboard')
        if keyPressNextBlock.status == STARTED:
            theseKeys = event.getKeys(keyList=['space'])
            
            # check for quit:
            if "escape" in theseKeys:
                endExpNow = True
            if len(theseKeys) > 0:  # at least one key was pressed
                keyPressNextBlock.keys = theseKeys[-1]  # just the last key pressed
                keyPressNextBlock.rt = keyPressNextBlock.clock.getTime()
                # a response ends the routine
                continueRoutine = False
        
        
        # check for quit (typically the Esc key)
        if endExpNow or event.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in interBlockComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "interBlock"-------
    for thisComponent in interBlockComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if keyPressNextBlock.keys in ['', [], None]:  # No response was made
        keyPressNextBlock.keys=None
    BlockListIteration.addData('keyPressNextBlock.keys',keyPressNextBlock.keys)
    if keyPressNextBlock.keys != None:  # we had a response
        BlockListIteration.addData('keyPressNextBlock.rt', keyPressNextBlock.rt)
    
    # the Routine "interBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed num_blocks repeats of 'BlockListIteration'


# ------Prepare to start Routine "end"-------
t = 0
endClock.reset()  # clock
frameN = -1
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
# Send trial onset marker to LSL
outlet.push_sample('e')
# keep track of which components have finished
endComponents = [polygon_2, text]
for thisComponent in endComponents:
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED

# -------Start Routine "end"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = endClock.getTime()
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *polygon_2* updates
    if t >= 0.0 and polygon_2.status == NOT_STARTED:
        # keep track of start time/frame for later
        polygon_2.tStart = t
        polygon_2.frameNStart = frameN  # exact frame index
        polygon_2.setAutoDraw(True)
    frameRemains = 0.0 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if polygon_2.status == STARTED and t >= frameRemains:
        polygon_2.setAutoDraw(False)
    
    # *text* updates
    if t >= 0.0 and text.status == NOT_STARTED:
        # keep track of start time/frame for later
        text.tStart = t
        text.frameNStart = frameN  # exact frame index
        text.setAutoDraw(True)
    frameRemains = 0.0 + 2.0- win.monitorFramePeriod * 0.75  # most of one frame period left
    if text.status == STARTED and t >= frameRemains:
        text.setAutoDraw(False)
    
    
    # check for quit (typically the Esc key)
    if endExpNow or event.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
child.sendline('\r')








# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
