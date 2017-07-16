
const Product = require('../../server/models/product'); // get our mongoose model
const app = require('../../app')
const client = [
    {
        "id": "-KlcUIvHwSbjP0bL1u2c",
        "name": "Hagner.io",
        "location": "Not available",
        "salesforce_id": "0011100001MzCiqAAF",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Thomas Hagner",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-05-11T22:26:40.000Z",
        "created_at": "2017-04-28T19:46:38.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvIyAFcNlii9n3E",
        "name": "Rajo",
        "location": "Not available",
        "salesforce_id": "0011100001NKJBeAAP",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Sagar Deb",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-05-09T11:58:04.000Z",
        "created_at": "2017-05-05T07:56:32.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvIyAFcNlii9n3J",
        "name": "Chikpea Test Rajo",
        "location": "Salt Lake West Bengal, India",
        "salesforce_id": "0011100001LhXJBAA3",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Sagar Deb",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-05-30T13:29:04.000Z",
        "created_at": "2017-03-06T09:26:38.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvJ57vItaVk6q5Y",
        "name": "CoTap Inc",
        "location": "San Francisco CA, USA",
        "salesforce_id": "0011100001M5AuUAAV",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Shad Bien",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-05-11T22:22:37.000Z",
        "created_at": "2017-03-22T18:52:31.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvHwSbjP0bL1u2e",
        "name": "Boom",
        "location": "Not available",
        "salesforce_id": "0011100001MzChxAAF",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Chris Waldron",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-04-28T19:44:16.000Z",
        "created_at": "2017-04-28T19:44:12.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvHwSbjP0bL1u2j",
        "name": "Velo NYC - Test",
        "location": "New York NY, Unites States",
        "salesforce_id": "0011100001MndiJAAR",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Shad Bien",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-05-11T22:33:24.000Z",
        "created_at": "2017-04-19T14:52:49.000Z",
        "status": "Prospective Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KlcUIvHwSbjP0bL1u2h",
        "name": "SF Giants",
        "location": "Not available",
        "salesforce_id": "0011100001MzCiWAAV",
        "onboarding_specialist": "",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Michelle Vock",
        "client_executive": "",
        "start_date": "",
        "end_date": "",
        "updated_at": "2017-04-28T20:05:41.000Z",
        "created_at": "2017-04-28T19:46:02.000Z",
        "status": "Former Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KXGyJcC1oimjQgFj17V",
        "name": "2U",
        "location": "Landover MD, United States",
        "salesforce_id": "0011a00000CPL3MAAX",
        "onboarding_specialist": "",
        "director_of_success": "Brian Ngure",
        "technical_coordinator": "Brian Busolo",
        "client_experience_lead": "Stefani Tasman",
        "client_executive": "Stefani Tasman",
        "start_date": "2015-04-15T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:51:59.000Z",
        "created_at": "2015-07-30T11:55:48.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KXGyJcC1oimjQgFj18Q",
        "name": "Accounteer",
        "location": "Brussels , Belgium",
        "salesforce_id": "0011a00000VtklqAAB",
        "onboarding_specialist": "Chris Acea",
        "director_of_success": "Suliat Ogunlende",
        "technical_coordinator": "Peter Njoroge",
        "client_experience_lead": "Stefani Tasman",
        "client_executive": "Tess Manning",
        "start_date": "2016-08-05T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:52:45.000Z",
        "created_at": "2016-06-30T14:02:44.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KXGyJcC1oimjQgFj17W",
        "name": "ActiveProspect",
        "location": "Austin TX, United States",
        "salesforce_id": "0011a00000YUBa8AAH",
        "onboarding_specialist": "Chris Acea",
        "director_of_success": "Suliat Ogunlende",
        "technical_coordinator": "Peter Njoroge",
        "client_experience_lead": "Michelle Vock",
        "client_executive": "Tess Manning",
        "start_date": "2016-12-01T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:50:32.000Z",
        "created_at": "2016-10-03T13:41:39.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-Ki5udYMBYRJaR2HaokY",
        "name": "AlphaSights",
        "location": "New York New York, United States",
        "salesforce_id": "0011a00000KF5lqAAD",
        "onboarding_specialist": "n/a",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Christopher Bair",
        "client_executive": "Tess Manning",
        "start_date": "2017-06-07T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:53:27.000Z",
        "created_at": "2016-02-26T15:32:29.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KXGyJcC1oimjQgFj18B",
        "name": "Atlas",
        "location": "New York NY, United States",
        "salesforce_id": "0011a00000DgGdKAAV",
        "onboarding_specialist": "Divya Gunasekaran",
        "director_of_success": "Suliat Ogunlende",
        "technical_coordinator": "Gozie Nwolisa",
        "client_experience_lead": "Stefani Tasman",
        "client_executive": "Kirk Newcombe",
        "start_date": "2015-09-14T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:50:32.000Z",
        "created_at": "2015-08-17T14:25:27.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-KXGyJcC1oimjQgFj17y",
        "name": "Alchemy IoT",
        "location": "Lafayette CO, United States",
        "salesforce_id": "0011a00000XpWiPAAV",
        "onboarding_specialist": "Divya Gunasekaran",
        "director_of_success": "Brian Ngure",
        "technical_coordinator": "Damilare Lana",
        "client_experience_lead": "Michelle Vock",
        "client_executive": "Kirk Newcombe",
        "start_date": "2016-10-31T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-30T08:20:56.000Z",
        "created_at": "2016-09-20T02:31:56.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-Ki5udYXlgwfrGTV1oY1",
        "name": "Bark & Co",
        "location": "New York NY, United States",
        "salesforce_id": "0011a00000XAFgwAAH",
        "onboarding_specialist": "n/a",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Stefani Tasman",
        "client_executive": "Stefani Tasman",
        "start_date": "2016-10-24T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:54:22.000Z",
        "created_at": "2016-08-26T17:56:05.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    },
    {
        "id": "-Ki5udYYX1bLlbPKgV1A",
        "name": "BBC News",
        "location": "London , United Kingdom",
        "salesforce_id": "0011a00000c84gJAAQ",
        "onboarding_specialist": "n/a",
        "director_of_success": "",
        "technical_coordinator": "",
        "client_experience_lead": "Gavin Bernstein",
        "client_executive": "Gavin Bernstein",
        "start_date": "2017-04-20T00:00:00.000Z",
        "end_date": "",
        "updated_at": "2017-05-29T14:54:42.000Z",
        "created_at": "2017-02-13T13:03:50.000Z",
        "status": "Client",
        "health": null,
        "description": "",
        "client_size": ""
    }]


module.exports = {
    createProducts(req, res) {
        if (req.body.name && req.body.quantity && req.body.price && req.body.unit && req.body.unit_price && req.body.description) {

            const product = new Product(req.body);
            product.created_by = req.decoded.email
            product.save(function (err) {
                if (err) {
                    res.status(500).send({ success: false, message: err });
                }
                else {
                    res.status(201).send({ success: true, message: 'Product added successfully' });
                }
            });
        }
        else {
            res.status(400).send({ success: true, message: 'Bad Request. Fill all the fields' });
        }
    },
    getAllProductsPublicAcess(req, res) {
        Product.find({}, function (err, task) {
            if (err)
                res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: task });
        });
    },
    getAllProducts(req, res) {
        Product.find({ created_by: req.decoded.email }, function (err, task) {
            if (err)
                res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: task });
        });
    },
    getProduct(req, res) {
        Product.findById({ _id: req.params.id, created_by: req.decoded.email }, function (err, task) {
            if (err)
                res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: task });
        });
    },
    updateProduct(req, res) {
        Product.findOneAndUpdate({ _id: req.params.id, created_by: req.decoded.email }, req.body, { new: true }, function (err, task) {
            if (err)
                res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: task });
        });

    },
    getApiData(req, res) {
        let clientId = req.body.text;
        client.forEach((item) => {
            if (item.id === clientId) {
                res.status(200).send("This channel for client " + "`" + item.name + "`" + " has been succesfully integrated with pulse");
            }
        })
        res.status(200).send("A client with the ID " + "`" + clientId + "`" + " has not been found, please check if the ID is correct");

        // switch (req.body.type) {
        //     case 'url_verification': {
        //         res.status(200).send({ challenge: req.body.challenge });
        //         break;
        //     }

        //     case 'event_callback': {

        //         const event = req.body.event;
        //         if (event.type === 'channel_created') {
        //             console.log(req.body)
        //             console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>xxxxxxxxxxxxxxxxxxxxxxxxxxxx<<<<<<<<<<<<<<<<")
        //             console.log(req.body.event.channel.name)
        //             console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>xxxxxxxxxxxxxxxxxxxxxxxxxxxx<<<<<<<<<<<<<<<<")
        //         }
        //         else if (event.type === 'channel_rename') {
        //             console.log(req.body)
        //         }

        //         break;
        //     }
        //     default: res.sendStatus(500);
        // }
        // res.status(200).send({ challenge: req.body.challenge });
        // console.log(req.body.event.type, req.body.type)
    },
    deleteProduct(req, res) {
        Product.remove({ _id: req.params.id, created_by: req.decoded.email }, function (err, task) {
            if (err)
                res.status(500).send({ success: false, message: err });
            res.status(200).send({ success: true, message: 'Product deleted successfully' });
        });
    }
}