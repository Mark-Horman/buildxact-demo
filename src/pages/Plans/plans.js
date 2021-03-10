import React from 'react';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/table';

export default class Plans extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tableData:[{"id":"02ddcef9-96f2-4ab6-84c8-8e607c2b7bf2","Description":"Cecil House","Date":"6/1/2014"},
                {"id":"b233ee24-fd98-4c55-8641-a77c11f07c2a","Description":"Iseabal House","Date":"9/15/2010"},
                {"id":"57d7edb5-eb77-492b-bf9f-dc7bc0e986d0","Description":"Modestia House","Date":"2/22/2018"},
                {"id":"9e9b444f-b70b-4b1a-9aae-972de5e51ea6","Description":"Darcey Bathroom","Date":"8/15/2010"},
                {"id":"e40e2e5b-51ee-4909-88ca-f26801c210a6","Description":"Quintana Kitchen","Date":"9/29/2016"},
                {"id":"e824b816-7485-4359-a82e-3d49e3523430","Description":"Andrei House","Date":"11/12/2018"},
                {"id":"a97b771d-6101-4455-9b07-d4430dbc440b","Description":"Mommy Bathroom","Date":"8/5/2016"},
                {"id":"91f876bd-04a4-44a1-8f6c-3ab0e2221e4d","Description":"Bernetta Kitchen","Date":"3/6/2017"},
                {"id":"0c8696f3-de6d-4874-adb7-cdc495b237fd","Description":"Michel Bathroom","Date":"5/8/2015"},
                {"id":"9e196bee-2889-483d-894d-c5b7d3b5eb3b","Description":"Doris Bathroom","Date":"9/9/2010"},
                {"id":"d1e2feba-678b-4023-8975-4a955275b75c","Description":"Rebekah House","Date":"9/15/2017"},
                {"id":"2d0806b2-5967-4efd-96b6-f0b219fd05c2","Description":"Florencia Kitchen","Date":"11/22/2011"},
                {"id":"147feceb-6d9f-4549-8d05-cb2afc3869cf","Description":"Pippa Kitchen","Date":"11/17/2013"},
                {"id":"581827c2-d497-43fd-9f0f-b5cb8fd53606","Description":"Daryl Bathroom","Date":"10/3/2014"},
                {"id":"ab3ce308-d2fa-4c9f-90bf-233cb166c6e4","Description":"Theresa Kitchen","Date":"3/16/2019"},
                {"id":"4d46a3a9-311f-4f1c-b10d-201f66aa8d33","Description":"Vanda House","Date":"5/11/2013"},
                {"id":"30005bae-bc27-432a-911a-bfdcac834528","Description":"Consuelo Kitchen","Date":"8/11/2015"},
                {"id":"2a1e829a-f59e-4e53-9c22-6bf2813237ba","Description":"Shaina Bedroom","Date":"1/29/2012"},
                {"id":"b1802bf8-e3fd-4af0-bcfd-ac60252110c1","Description":"Nert Site","Date":"12/21/2016"},
                {"id":"10ac9019-802d-4219-a476-8322d325b049","Description":"Jamie Site","Date":"12/23/2010"},
                {"id":"c1b99b66-e992-45bf-a7a5-8c89c28c1dd6","Description":"Amelina House","Date":"9/8/2019"},
                {"id":"9990eed4-3eed-4a10-9d48-3b588f50d7a6","Description":"Claudine Shed","Date":"12/20/2016"},
                {"id":"7a5e45f3-ee48-4c4e-b94a-f7a31c8a3b07","Description":"Fanchette House","Date":"5/2/2012"},
                {"id":"6013dfcb-515e-461d-a5ab-f2e213a2c7a3","Description":"Jacquetta Kitchen","Date":"4/2/2019"},
                {"id":"6085efa4-8e63-4c46-9d68-c2656f5eddcb","Description":"Corny Bedroom","Date":"10/25/2019"}]
        }
    }

    render() {
        return (
            <Layout>
                <Table data={this.state.tableData}/>
            </Layout>
        );
    }
}
