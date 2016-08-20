'use strict';

// render apx family information onto page
;(() => {
    const nodes = [
        '51377C496818552E263583A44C796DF3FB0BC71B',
        'A6B0521C4C1FB91FB66398AAD523AD773E82E77E',
        '38A42B8D7C0E6346F4A4821617740AEE86EA885B'
    ];

    const infoBaseURL = tag => `https://atlas.torproject.org/#details/${tag}`;

    const buildTarmNode = (pos, customHero, classOverride) => {
        const container = document.createElement('span');
              container.className = `${classOverride || `r${pos + 1}tarm`} tarm`;

            const infoLink = customHero || document.createElement('a');

            if (!customHero) {
                infoLink.href = infoBaseURL(nodes[pos]);
                infoLink.innerHTML = `apx${pos + 1}`;
            }

            // todo fix
            const postIdSpace = document.createTextNode(' ');

            const rxImg = document.createElement('img');
                  rxImg.src = 'rtx.svg';

            const rxSum = document.createElement('span');
                  rxSum.className = 'rx';

            const txImg = document.createElement('img');
                  txImg.src = 'rtx.svg';
                  txImg.className = 'stx';

            const txSum = document.createElement('span');
                  txSum.className = 'tx';

            const rxtxImg = document.createElement('img');
                  rxtxImg.src = 'rtx.svg';

            const rxtxSum = document.createElement('span');
                  rxtxSum.className = 'rxtx';

        [
            infoLink,
            postIdSpace,
            rxImg,
            rxSum,
            txImg,
            txSum,
            rxtxImg,
            rxtxSum
        ].forEach(e => container.appendChild(e));

        return container;
    };

    const buildSumNodes = () => {
        const lnsum = document.createElement('span');
              lnsum.className = 'tarm-lnsum';

        const customTarmHero = document.createElement('span');
              customTarmHero.className = 'sum';
              customTarmHero.innerHTML = '∑';

        const tarmSum = buildTarmNode(null, customTarmHero, 'tarm-sum');

        return [lnsum, tarmSum];
    };

    const finalNodes = [];

    finalNodes.push(...nodes.map((a, i) => buildTarmNode(i)));
    finalNodes.push(...buildSumNodes());

    finalNodes.forEach(e => document.body.appendChild(e));
})();

// render loader
;(() => {
        const ldr = () => {
            let i = document.createElement('img');

            i.src = 'bars.svg';
            i.className = 'loader';

            return i;
        };

        for (let i = 1; i < 4; ++i) {
            [
                `.r${i}tarm .rx`,
                `.r${i}tarm .tx`,
                `.r${i}tarm .rxtx`
            ].forEach(selector => {
                document.querySelector(selector).appendChild(ldr());
            });
        }
})();

// inject socket io
const sio = document.createElement('script');

sio.onload = () => {
    if (undefined === typeof io) {
        throw new Error(
            'Unblock socket.io for realtime traffic information about the apx exit node family'
        );
    }

    const rt = io({
        path: '/io'
    });

    const sum = {
        rx: [],
        tx: []
    };

    const setRXTX = (selector, a, b) => {
        document.querySelector(`${selector} .rx`).innerHTML = a.toFixed(3) + 'm';
        document.querySelector(`${selector} .tx`).innerHTML = b.toFixed(3) + 'm';
        document.querySelector(`${selector} .rxtx`).innerHTML = (a + b).toFixed(3) + 'm';
    };

    const updateSum = () => {
        const a = sum.rx.reduce((a, b) => a + b, 0);
        const b = sum.tx.reduce((a, b) => a + b, 0);

        setRXTX('.tarm-sum', a, b);
    };

    const initSum = (() => {
        let isum;

        return () => {
            if (isum) {
                return;
            }

            isum = setInterval(updateSum, 500);
            updateSum();
        };
    })();

    const drawNode = (n, data) => {
        if (!data[`apx${n}`].bw) return;

        // 1048576
        // 131072
        const a = (((data[`apx${n}`].bw[0] / 131072) * 1000) | 0) / 1000,
              b = (((data[`apx${n}`].bw[1] / 131072) * 1000) | 0) / 1000;

        sum.rx[n - 1] = a;
        sum.tx[n - 1] = b;

        setRXTX(`.r${n}tarm`, a, b);

        initSum();
    };

    rt.on('tbw', data => {
        if (data.apx1) {
            drawNode(1, data);
        }

        if (data.apx2) {
            drawNode(2, data);
        }

        if (data.apx3) {
            drawNode(3, data);
        }
    });
};

sio.src = '/io/socket.io.js';

document.body.appendChild(sio);
