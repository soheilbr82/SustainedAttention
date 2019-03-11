Project: Visual Attention Neurofeedback Platorm

#######################################################################
PhD Student: Soheil Borhani, sborhani at vols.utk.edu
Research Assistant: Michael O’Neil, moneil8 at vols.utk.edu

Zhao’s Brain-computer interface lab, University of Tennessee, Knoxville
#######################################################################
Requirements:
1. Psychopy
2. pylsl
3. LabRecorder
4. xdf file loader (Python and MATLAB)
5. python xlrd library


Optional Requirements:
1. MATLAB Importer (for importing xdf data files in MATLAB)

#######################################################################
Instruction:
The platform is designed to evaluate attentional state using primarily EEG signals.
The setup can be extended to synchronously collect other types of behavioral and
physiological signals (Heart rate, saccade, GSR, etc.).
Doube-clicking on “VisualAttention.psyexp” will run the experiment. 

#######################################################################
Sustained Attention Markers:



#######################################################################
Recording File Format:
The recording program (LabRecorder) and Python/C++ library (RecorderLib) record into the XDF file 
format (Extensible Data Format, hosted at https://github.com/sccn/xdf). XDF was designed concurrently 
with the lab streaming layer and supports the full feature set of LSL (including multi-stream container 
files, per-stream arbitrarily large XML headers, all sample formats as well as time-synchronization information).

#######################################################################
Additional feature:

1-Automatically start and stop LabRecorder during the experiment in the background
	- On Windows we need "winpexpect" library to accomodate LabRecorder in the background automatically.
		You have to add "winpexpect.py" and "pexpect.py" to the Psychopy installation folder in <install-source>\PsychoPy3\Lib\site-packages