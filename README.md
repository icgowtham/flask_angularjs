# flask_angularjs
A template for creating flask application with angularjs as frontend. Contains the boiler-plate code required to get things started.


### Bootstrapping Steps:
1. Create a temporary folder. For e.g.:
```bash
$ mkdir -p temp/flask_angularjs
```

2. Copy the contents of the zip file to the newly created directory.

3. Change to the newly created directory. For e.g.:
```bash
$ cd temp/flask_angularjs
```

4. Create a Python virtual environment. This can be either done manually using:
```bash
$ virtualenv -p python3 env3
```

5. Activate the virtual environment. For e.g.
```bash
$ source env3/bin/activate
```

6. Install the application requirements using:
```bash
$ pip3 install -r requirements.txt
```

7. Set PYTHONPATH using:
```bash
$ export PYTHONPATH=.
```

8. Run the application using (egress and ingress traffic on port 5000 should be enabled):
```bash
$ python3 run.py
```
