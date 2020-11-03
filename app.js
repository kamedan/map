

let paths = document.querySelectorAll('.land');


departements.forEach((element) => {

    const mag = magasins.filter((elem) => {
        return elem.id === element.num_dep && elem.public;
    });
    if (mag.length > 0) {
        let path = document.getElementById(`region-${element.num_dep}`);

        path.style.fill = '#2a3089';
    }
});

paths.forEach((path) => {

    path.addEventListener('mouseenter', (e) => {
        if (document.getElementById('tooltiptext')) {
            document.getElementById('tooltiptext').remove();
        }

        let regionNumber = e.target.id.replace('region-', '');
        const mag = magasins.filter((element) => {
            return element.id === regionNumber && element.public;
        });
        if (mag) {
            if (mag.length > 0) {


                var div = document.createElement('div');
                //div.textContent = mag.magasins[0].name;
                div.setAttribute('id', 'tooltiptext');
                div.style.backgroundColor = '#fff';
                div.style.borderRadius = '5px';
                div.style.padding = '10px';
                div.style.width = '20%';
                //div.style.height = '100px';
                div.style.position = 'absolute';
                div.style.zIndex = '999';
                div.style.left = `${e.pageX - 5}px`;
                div.style.top = `${e.pageY - 5}px`;
                div.style.boxShadow = '0 15px 20px 0 rgba(0,0,0,0.2)';
                //div.style.textAlign = 'center';
                let dep = departements.filter(elem => elem.num_dep === mag[0].id);

                var h1 = document.createElement('h2');
                h1.textContent = dep[0].num_dep + ' | ' + dep[0].dep_name;
                h1.style.margin = '0';
                h1.style.color = 'purple';
                h1.style.fontFamily = "arial";
                if(window.matchMedia("(max-width: 500px)").matches){
                    h1.style.fontSize = '10px';
                }else{
                    h1.style.fontSize = '15px';
                }
                div.appendChild(h1);
                var hr = document.createElement('hr');
                div.appendChild(hr);

                mag.forEach((elem) => {
                    var a = document.createElement('a');
                    a.setAttribute('title', elem.name);
                    a.setAttribute('href', elem.link);
                    a.setAttribute('target', '_blank');
                    a.text = elem.name;
                    a.style.textDecoration = 'none';
                    a.style.fontWeight = 'bold';
                    a.style.paddingBottom = '5px';
                    a.style.paddingTop = '5px';
                    a.style.backgroundColor = '#fafafa';
                    a.style.borderRadius = '5px';
                    a.style.margin = '5px';
                    if(window.matchMedia("(max-width: 500px)").matches){
                        a.style.fontSize = '10px';
                    }else{
                        a.style.fontSize = '15px';
                    }
                    
                    a.style.display = 'block';
                    a.style.color = '#2a3089';
                    a.style.fontFamily = "arial";
                    div.appendChild(a);

                });

                document.body.appendChild(div);

            }
        }
    });
});