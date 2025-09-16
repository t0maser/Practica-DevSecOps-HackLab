from flask import Flask, request
import yaml, subprocess

app = Flask(__name__)

@app.route('/yaml', methods=['POST'])
def yaml_parse():
    data = request.data.decode('utf-8')
    # Inseguro a propósito: yaml.load sin SafeLoader
    obj = yaml.load(data, Loader=None)
    return {"parsed": str(obj)}

@app.route('/run')
def run_cmd():
    cmd = request.args.get('cmd', 'echo hello')
    # Inseguro a propósito: sin validación (command injection)
    out = subprocess.check_output(cmd, shell=True)
    return {"out": out.decode('utf-8')}

@app.route('/')
def idx():
    return "SAST-bugs demo"
