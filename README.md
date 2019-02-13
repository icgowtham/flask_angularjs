# flask_angularjs
A template for creating flask application with angularjs as frontend. Contains the boiler-plate code required to get things started.


### Bootstrapping Steps:
1. Create a temporary folder. For e.g.:
mkdir -p temp/flask_angularjs

2. Copy the contents of the zip file to the newly created directory.

3. Change to the newly created directory. For e.g.:
cd temp/flask_angularjs

4. Create a Python virtual environment. This can be either done manually using:
virtualenv -p python3 env3

5. Activate the virtual environment. For e.g.
source env3/bin/activate

6. Install the application requirements using:
pip3 install -r requirements.txt

7. Set PYTHONPATH using:
export PYTHONPATH=.

8. Run the application using (egress and ingress traffic on port 5000 should be enabled):
python3 run.py
