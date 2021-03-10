import React from 'react';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/table';

export default class Documents extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tableData:[{"id":"abc1b5c4-3d0a-4904-b85e-108e8e86f7b4","Description":"Donna Contract For Work","Date":"10/24/2019"},
                {"id":"c197c798-f3b9-4197-8131-17111da0252a","Description":"Bryana Contract For Work","Date":"5/27/2016"},
                {"id":"b10d1774-5cb8-46a1-acaf-b34834c9150d","Description":"Cindi Contract For Work","Date":"3/16/2018"},
                {"id":"77580204-8a82-4380-85b7-696e4d09241e","Description":"Candis Contract For Work","Date":"5/28/2010"},
                {"id":"818700ca-b145-4a1a-bc7f-37c53a240dd2","Description":"Dori Contract For Work","Date":"5/1/2013"},
                {"id":"95784688-1c4e-44c8-9dd6-42fe5cd4aedf","Description":"Erin Contract For Work","Date":"11/29/2010"},
                {"id":"5f727c88-063b-459d-ac37-1ba7ac5a403b","Description":"Neysa Contract For Work","Date":"8/9/2012"},
                {"id":"a8f2b509-1e18-47e0-8f9f-dc4a1c1d639b","Description":"Janine Contract For Work","Date":"5/21/2011"},
                {"id":"ae6434d5-64af-4304-8bdb-44c66d6f21f4","Description":"Briney Contract For Work","Date":"4/9/2011"},
                {"id":"7d21fa2c-3b49-4549-af36-5c4e61849d30","Description":"Guillemette Contract For Work","Date":"10/9/2018"},
                {"id":"25c1b160-3d68-4026-afd4-5c374cecaef6","Description":"Sharron Contract For Work","Date":"12/4/2019"},
                {"id":"13e7a535-3410-4602-96e1-85aedd8af5a4","Description":"Lacy Contract For Work","Date":"4/6/2013"},
                {"id":"ae23d7a8-b023-432d-b95f-e5d0f01e4e56","Description":"Randy Contract For Work","Date":"10/6/2013"},
                {"id":"4b5d4990-f394-448f-8e25-2ed8e8b47095","Description":"Trudey Contract For Work","Date":"4/1/2015"},
                {"id":"e3ca4155-352a-4039-b961-13a2c9a0e66d","Description":"Joya Contract For Work","Date":"11/4/2010"},
                {"id":"e250dfff-3b3b-45c9-92a1-c2734780c558","Description":"Bettye Contract For Work","Date":"2/19/2015"},
                {"id":"3f5eac98-8659-4d9a-a5f7-89393d740503","Description":"Blanch Contract For Work","Date":"8/15/2018"},
                {"id":"5c759762-ea35-4b84-b89f-2ab6315364ac","Description":"Wendy Contract For Work","Date":"7/6/2011"},
                {"id":"f217cce3-20b7-4371-830b-98639738b053","Description":"Olimpia Invoice","Date":"10/18/2013"},
                {"id":"69975d3c-1223-4183-90d2-970d9a367436","Description":"Coletta Invoice","Date":"11/8/2010"},
                {"id":"e2975268-75c4-47fe-a99c-50e9d4d60b30","Description":"Nolie Invoice","Date":"8/1/2012"},
                {"id":"e3050542-76ea-44e0-bfa2-5c90481681d7","Description":"Loralee Invoice","Date":"8/25/2010"},
                {"id":"78f20b30-2898-4534-937b-bf988a01cd79","Description":"Ofella Invoice","Date":"3/25/2017"},
                {"id":"11aad322-4b54-4301-9068-022c36b24e1f","Description":"Yetty Invoice","Date":"5/15/2010"},
                {"id":"c6cebf94-d53c-4719-afda-4d3e572bea6a","Description":"Datha Invoice","Date":"5/28/2010"},
                {"id":"939ebf88-bff6-46d5-b028-a9b9c10e2553","Description":"Tabbatha Invoice","Date":"10/11/2018"},
                {"id":"9ccc33ee-ea58-409a-976f-116a93d42e49","Description":"Oralee Invoice","Date":"6/16/2013"},
                {"id":"a35e026f-b95a-47d2-8038-b5315158b58f","Description":"Sande Invoice","Date":"10/22/2013"},
                {"id":"a78722a2-bd34-4a88-a7b1-1e5ae05074f6","Description":"Romona Invoice","Date":"6/27/2015"},
                {"id":"1a85f0f1-cf8b-4185-9d1f-c9e852e1f5d9","Description":"Orsola Invoice","Date":"8/5/2014"},
                {"id":"dace6768-9125-4011-9912-53968f335f05","Description":"Alvina Proposal","Date":"10/26/2012"},
                {"id":"49332d7b-9465-4f06-8aa6-9c5dde5c78d4","Description":"Brandea Proposal","Date":"8/6/2012"},
                {"id":"0cb315d6-d4dd-40d1-8e66-6ff3de1a0bf6","Description":"Kate Proposal","Date":"6/5/2012"},
                {"id":"7da32635-4298-497a-b411-a1fb9eb86998","Description":"Issy Proposal","Date":"2/3/2014"},
                {"id":"769be023-8080-41f4-80d2-db3afca77005","Description":"Anitra Proposal","Date":"10/11/2011"},
                {"id":"204c8ab3-2b18-40b4-96ee-399462cea890","Description":"Tony Proposal","Date":"10/3/2017"},
                {"id":"561b293e-b9a8-41ba-9d25-bfa980d755d6","Description":"Fawnia Proposal","Date":"3/11/2015"},
                {"id":"a38dfade-d73d-40a8-b762-e68a91088478","Description":"Theodora Proposal","Date":"3/23/2011"},
                {"id":"fe826175-566b-4cae-bbaf-35339c4434ce","Description":"Emma Proposal","Date":"8/23/2018"},
                {"id":"586363d6-ae86-4b4d-bdef-dcfa11ce12fa","Description":"Sydel Proposal","Date":"8/27/2014"},
                {"id":"631810ee-fda6-4567-b35b-28acdbe4cafd","Description":"Bianca Proposal","Date":"2/23/2016"},
                {"id":"7a27391c-cab0-42a7-a286-ceecf50c19ba","Description":"Val Proposal","Date":"10/2/2012"},
                {"id":"e5e9258f-0330-4570-aa2d-d225eb0bdebb","Description":"Dyann Proposal","Date":"3/21/2012"},
                {"id":"f07922a6-8a24-4f68-88d4-dc3814356ff8","Description":"Jess Proposal","Date":"7/9/2012"},
                {"id":"cb239d72-bcec-4430-ae1f-c07b2b8705e4","Description":"Corabella Proposal","Date":"5/7/2016"},
                {"id":"58e5d630-dbf4-4806-9d08-6e33214466a2","Description":"Isabelle Proposal","Date":"6/16/2010"},
                {"id":"5ad241a8-1b54-4a15-a586-3913270e21cc","Description":"Tabith Proposal","Date":"5/19/2019"},
                {"id":"ba2fa262-a11b-46e0-b523-7c2535c708fc","Description":"Roseanne Proposal","Date":"12/28/2019"},
                {"id":"fbd97bd4-4502-4bce-9ae4-5871feb0ab10","Description":"Quinta Proposal","Date":"10/21/2011"},
                {"id":"26078b71-d553-4a41-89e0-56a2ebe09de4","Description":"Ruth Proposal","Date":"1/25/2019"}]
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
