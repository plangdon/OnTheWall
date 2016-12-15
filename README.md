# OnTheWall (Mirror Mirror 2 Module Development)
Platform agnostic test harness for MirrorMirror RaspPi project to aide in building custom modules.


## Getting Started on Windows
- Get a good editor - I like https://atom.io/

### If you want to be a contributor or easily get updates - Install git
- Clone the project
  - git clone https://github.com/plangdon/OnTheWall.git

### If you just want to download and play
- Download zip - https://github.com/plangdon/OnTheWall/archive/master.zip






## Connection to your Orange Pi
- Hook up a monitor and a keyboard/mouse
- Configure your wifi 
- Launch xterm -> Applications > Accessories > XTerm
  - type: sudo su
   - enter your password
  - type: ifconfig
   - Get ip address


## SSH to your Orange Pi
- Windows: download/use putty.exe
- OSX: command ssh root@ipaddress


Navigate to ~/OnTheWall
- Pull down updates:
 - git pull
 
 





Including Build Scripts for Debian based platforms (raspbian, armbian)
curl -sL https://raw.githubusercontent.com/plangdon/OnTheWall/master/installers/raspberry.sh | bash
