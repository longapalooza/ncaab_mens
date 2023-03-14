document.addEventListener('DOMContentLoaded', () => {
    let current_time = new Date();
    if(current_time.getTime() < close_time.getTime()){
        var game_index = 0;
        var n_games = teams.length - 1;

        var name_, email_, picks = Array(teams.length + n_games);
        teams.forEach(function(e, i, a){
            picks[i] = e;
        });

        document.title = title;

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var next = document.getElementById('next');

        name_email_check(name, email);
        name.addEventListener('input', function() {name_email_check(name, email);});
        email.addEventListener('input', function() {name_email_check(name, email);});
        next.addEventListener('click', function() {next_button(0);});

        name.addEventListener('keypress', function(event) {enter_button(event);});
        email.addEventListener('keypress', function(event) {enter_button(event);});

    } else {
        console.log(current_time.getTime());
        console.log(close_time.getTime());
        body = document.getElementsByTagName('body')[0];
        body.innerHTML = '<h3>Submissions are no longer being accepted for ' + title + '.<br><br>See you next year!<h3>';
    }

    function create_form_div(game_index){
        if(game_index == 0){
            let form = document.getElementById('form');
            form.innerHTML = '';

            let name_input = document.createElement('input');
            name_input.id = 'name';
            name_input.type = 'text';
            name_input.placeholder = 'Name';
            name_input.value = name_;
            form.appendChild(name_input);

            form.appendChild(document.createElement('br'));

            let email_input = document.createElement('input');
            email_input.id = 'email';
            email_input.type = 'text';
            email_input.placeholder = 'Email';
            email_input.value = email_;
            form.appendChild(email_input);

            let div = document.createElement('div')
            div.classList.add('bar');

            let next = document.createElement('button');
            next.classList.add('next_button');
            next.innerHTML = 'Next &gt;';
            next.id = 'next';
            div.appendChild(next);

            form.appendChild(div);

            var name = document.getElementById('name');
            var email = document.getElementById('email');

            name_email_check(name, email);

            name.addEventListener('input', function() {name_email_check(name, email);});
            email.addEventListener('input', function() {name_email_check(name, email);});
            next.addEventListener('click', function() {next_button(game_index);});
        } else if(game_index > 0 && game_index <= n_games){
            let form = document.getElementById('form');
            form.innerHTML = '';

            let rg = round_game(game_index);

            let subtitle = document.createElement('h3');
            subtitle.innerHTML = 'Round of ' + rg[1] + ', Game ' + rg[2];
            form.appendChild(subtitle);

            let teamA = document.createElement('button');
            teamA.classList.add('team_button');
            teamA.innerHTML = create_team_button_content(picks[2*(game_index - 1)]);
            teamA.id = 'teamA';
            if(picks[teams.length + game_index - 1] == picks[2*(game_index - 1)]){
                teamA.classList.add('selected');
            }

            form.appendChild(teamA);

            let teamB = document.createElement('button');
            teamB.classList.add('team_button');
            teamB.innerHTML = create_team_button_content(picks[2*(game_index - 1) + 1]);
            teamB.id = 'teamB';
            if(picks[teams.length + game_index - 1] == picks[2*(game_index - 1) + 1]){
                teamB.classList.add('selected');
            }
            form.appendChild(teamB);

            let div = document.createElement('div')
            div.classList.add('bar');

            let prev = document.createElement('button');
            prev.classList.add('half_button');
            prev.classList.add('prev_button');
            prev.innerHTML = '&lt; Prev';
            prev.id = 'prev';
            div.appendChild(prev);

            let next = document.createElement('button');
            next.classList.add('half_button');
            next.classList.add('next_button');
            next.classList.add('disabled');
            next.innerHTML = 'Next &gt;';
            next.id = 'next';
            div.appendChild(next);

            form.appendChild(div);

            teamA.addEventListener('click', function() {select_(teamA);});
            teamB.addEventListener('click', function() {select_(teamB);});
            next.addEventListener('click', function() {next_button(game_index);});
            prev.addEventListener('click', function() {prev_button(game_index);});

            teamA = document.getElementById('teamA');
            teamB = document.getElementById('teamB');

            is_selected(teamA, teamB);

        } else if(game_index == (n_games + 1)){
            let form = document.getElementById('form');
            form.innerHTML = '';

            let subtitle = document.createElement('h3');
            content = 'You selected ';
            for(let i = 0; i < picks[picks.length - 1].length; i++){
                content += picks[picks.length - 1][i]['name'];
                content += '&nbsp;&nbsp;/&nbsp;&nbsp;';
            }
            content = content.substring(0, content.length - 25);
            content += ' to win it all!';

            subtitle.innerHTML = content;
            form.appendChild(subtitle);

            let submit = document.createElement('button');
            submit.innerHTML = 'Submit to go mad!';
            submit.id = 'submit';
            form.appendChild(submit);

            let div = document.createElement('div')
            div.classList.add('bar');

            let prev = document.createElement('button');
            prev.classList.add('prev_button');
            prev.innerHTML = '&lt; Prev';
            prev.id = 'prev';
            div.appendChild(prev);
            form.appendChild(div);

            let a = document.createElement('a');
            a.classList.add('hide');
            a.href = create_submission_link();
            a.id = 'submit_link';
            form.appendChild(a);

            prev.addEventListener('click', function() {prev_button(game_index);});
            submit.addEventListener('click', function() {document.getElementById('submit_link').click();});
        }
    }

    function create_submission_link(){
        var href = form_url;
        href += 'entry.' + field_ids[0] + '=' + encodeURIComponent(name_) + '&';
        href += 'entry.' + field_ids[1] + '=' + encodeURIComponent(email_) + '&';

        var pick_ids = field_ids.slice(2);
        var data = picks.slice(teams.length);

        pick_ids.forEach(function(e, i, a){
            href += 'entry.' + e + '=';
            data[i].forEach(function(e1, i1, a1){
                href += encodeURIComponent(e1['name']) + '/';
            });
            href = href.substring(0, href.length - 1) + '&';
        });

        href += 'submit=Submit';
        href = encodeURI(href);

        return href;
    };

    function create_team_button_content(pick){
        content = '';
        for(let i = 0; i < pick.length; i++){
            content += '<img src="';
            content += pre_img_url;
            content += pick[i]['abbr'];
            content += post_img_url;
            content += '" />&nbsp;&nbsp;&nbsp;&nbsp;';
            content += '(' + pick[i]['seed'] + ')&nbsp;';
            content += pick[i]['name'];
            content += '&nbsp;&nbsp;/&nbsp;&nbsp;';
        }
        content = content.substring(0, content.length - 25);
        return content;
    };

    function enter_button(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            document.getElementById('next').click();
        }
    }

    function is_selected(teamA, teamB){
        let check = teamA.classList.contains('selected') || teamB.classList.contains('selected');
        if(check){
            document.getElementById('next').classList.remove('disabled');
        }
        return check;
    };

    function name_email_check(name, email){
        let checks = false;

        if(name.value.trim() != "" && valid_(email.value.trim())){
            checks = true;
        }

        if(checks){
            document.getElementById('next').classList.remove('disabled');
        } else {
            document.getElementById('next').classList.add('disabled');
        }

        return checks;
    };

    function next_button(game_index){
        if(game_index == 0){
            let check = name_email_check(name, email);

            if(check){
                name_ = name.value.trim();
                email_ = email.value.trim();
                game_index += 1
                create_form_div(game_index);
            } else {
                if(name.value.trim() == ''){
                    alert('Name cannot be blank.');
                } else if(!valid_(email.value.trim())){
                    alert('Invalid email.');
                } else {
                    console.log('Error');
                }
            }
        } else if(game_index > 0 && game_index <= n_games){
            let teamA = document.getElementById('teamA');
            let teamB = document.getElementById('teamB');

            if(is_selected(teamA, teamB)){
                if(teamA.classList.contains('selected')){
                    picks[teams.length + game_index - 1] = picks[2*(game_index - 1)];
                } else {
                    picks[teams.length + game_index - 1] = picks[2*(game_index - 1) + 1];
                }
                game_index += 1
                create_form_div(game_index);
            }
        } else if(game_index == (n_games + 1)){
            game_index += 1;
            create_form_div(game_index);
        }
    };

    function prev_button(game_index){
        game_index -= 1;
        create_form_div(game_index);
    };

    function round_game(game_index){
        let round = 0;
        let roundof = 0;
        let game = 0;
        let n_rounds = Math.log(teams.length / 2) / Math.log(2) + 1;
        let current_round_games = 2**(n_rounds - 1);
        let prev_round_games = 0;
        let c = n_rounds;

        while(c >= 0){
            if(game_index > prev_round_games && game_index <= (prev_round_games + current_round_games)){
                round = n_rounds - c + 1;
                game = game_index - prev_round_games;
                c = -1;
            } else {
                prev_round_games += current_round_games;
                c -= 1
                current_round_games = 2**(c - 1);
            }
        }
        roundof = 2**(n_rounds - round + 1);

        return [round, roundof, game];
    };

    function select_(team){
        document.getElementById('teamA').classList.remove('selected');
        document.getElementById('teamB').classList.remove('selected');
        document.getElementById('next').classList.remove('disabled');
        team.classList.add('selected');
    };

    function valid_(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(String(email).toLowerCase());
    };
});
