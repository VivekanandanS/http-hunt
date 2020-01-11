var api = require('./api');
var utils = require('./utils')
exports.start = async () => {
    while (true) {
        var challenge = await api.challenge();
        console.log(challenge)
        switch (challenge) {
            case 1:
                await stage1();
                break;
            case 2:
                await stage2();
                break;
            case 3:
                await stage3();
                break;
            case 4:
                await stage4();
                break;
            default:
                throw `Challenge ${i} is not solved yet`
                break;
        }
    }
}

async function stage1() {
    var input = await api.input();
    console.log(input)
    var output = await api.output({ count: input.length });
    console.log(output)
}

async function stage2() {
    var input = await api.input();
    console.log(input)
    var count = utils.countActive(input);
    console.log(count);
    var output = await api.output({ count: count });
    console.log(output)
}

async function stage3() {
    var input = await api.input();
    console.log(input)
    var categories = utils.countActiveByCategory(input);
    var output = await api.output(categories);
    console.log(output)
}


async function stage4() {
    var input = await api.input();
    console.log(input)
    var cost = utils.activePrice(input);
    var output = await api.output({ totalValue: cost });
    console.log(output)
}

exports.start();