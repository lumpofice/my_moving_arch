from flask import render_template, redirect, url_for, request
from app.main import bp

@bp.route('/', methods=['GET', 'POST'])
@bp.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html', title='My Moving Arch')


@bp.route('/visual_art', methods=['GET', 'POST'])
def visual_art():
    if request.method == 'POST':
        if request.form['submit_button'] == 'Robots Grow Out of Keyboards':
            return redirect(url_for('main.robots_grow_out_of_keyboards'))
    return render_template('visual_art.html', title='My Moving Arch')


@bp.route('/visual_art/robots_grow_out_of_keyboards', \
        methods=['GET', 'POST'])
def robots_grow_out_of_keyboards():
    return render_template('robots_grow_out_of_keyboards.html', \
            title='My Moving Arch')
