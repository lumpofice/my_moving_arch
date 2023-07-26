from flask import render_template, redirect, url_for, request
from app.main import bp

@bp.route('/', methods=['GET', 'POST'])
@bp.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html', title='My Moving Arch')


@bp.route('/visual', methods=['GET', 'POST'])
def visual():
    if request.method == 'POST':
        if request.form['submit_button'] == 'Robots':
            return redirect(url_for('main.robots_grow_out_of_keyboards'))
        if request.form['submit_button'] == 'Milk and Honey':
            return redirect(url_for('main.land_of_milk_and_honey'))
        if request.form['submit_button'] == 'Sweet Tooth':
            return redirect(url_for('main.sweet_tooth'))
        if request.form['submit_button'] == 'Metric Topology':
            return redirect(url_for('main.metric_topology'))
    return render_template('visual.html', title='My Moving Arch')


@bp.route('/visual/robots_grow_out_of_keyboards', \
        methods=['GET', 'POST'])
def robots_grow_out_of_keyboards():
    return render_template('robots_grow_out_of_keyboards.html', \
            title='My Moving Arch')


@bp.route('/visual/land_of_milk_and_honey', \
        methods=['GET', 'POST'])
def land_of_milk_and_honey():
    return render_template('land_of_milk_and_honey.html', \
            title='My Moving Arch')


@bp.route('/visual/sweet_tooth', methods=['GET', 'POST'])
def sweet_tooth():
    return render_template('sweet_tooth.html', title='My Moving Arch')


@bp.route('/visual/metric_topology', methods=['GET', 'POST'])
def metric_topology():
    return render_template('metric_topology.html', title='My Moving Arch')

