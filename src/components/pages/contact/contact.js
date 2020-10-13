import React from 'react';

import axios from 'axios';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: ''
        }
        this.getFile = this.getFile.bind(this);
    }
    componentDidMount(){
        // axios.post().then(()=>{

        // });
    }
    getFile(e){
     
            const file = e.target.files[0];

            const formData = new FormData();
            formData.append('file', file);

            axios.post('http://storage.giahuy.3tc.vn', formData).then((res)=>{
                console.log(res);
            });
    
    }

    render(){
        return(
            <div className="contact"> <br/>
                    <input type = "file" name = "userfile" onChange={this.getFile} />
            </div>
        );
    }
}

export default Contact;