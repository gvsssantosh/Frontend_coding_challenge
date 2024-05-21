import axios from 'axios';

export let customerServiceObj =
{
    createCustomer, getAllCustomers, getCustomerByID
};

let url = "http://localhost:3002/customerApi"

async function createCustomer(customerObj) {
    //         let applyJobObj = {
    //             job_id: parseInt(req.body.job_id),
    //             user_id: parseInt(req.body.user_id)
    try {
        let result = await axios.post(url + "/createCustomer", customerObj);
        return result.data;
    } catch (error) {
        return(error.response.data);
    }
}

async function getAllCustomers() {
    
    try {
        let result = await axios.get(url + `/getAllCustomers`);
        return result.data;
    } catch (error) {
        return(error.response.data);
    }
}

async function getCustomerByID(userId) {
    try {
        let result = await axios.get(url + `/getCustomerByID/${userId}`);
        return result.data;
    } catch (error) {
        return(error.response.data);
    }
}
// async function deleteApplication(deleteObj) {
//     //         let deleteObj = {
//     //             user_id: parseInt(req.body.user_id),
//     //             job_id: parseInt(req.body.job_id)
//     //         }
//     const token = sessionStorage.getItem('user-token');
//     const config = {
//         headers: { Authorization: `Bearer ${token}` }
//     };
//     try {
//         let result = await axios.delete(url + `/delJobApplication`, deleteObj, config);
//         return result.data;
//     } catch (error) {
//         return(error.response.data);
//     }
// }

