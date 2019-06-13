import React , {Component} from 'react';
import './New.css';
import api from'../services/api';

class New extends Component{
    state = {
        image: null,
        autor: '',
        place: '',
        desctription: '',
        hashtags: '',
    };

    handleChange = e => {
        this.setState({ [e.target.name] :e.target.value});
    }
    handleImageChange = e => {
        this.setState({image: e.target.files[0]}); 
    }
    handleSubmit = async e => {
      
        e.preventDefault();
        
        const data = new FormData();
        data.append('image',this.state.image);
        data.append('autor',this.state.autor);
        data.append('place',this.state.place);
        data.append('desctription',this.state.desctription);
        data.append('hashtags',this.state.hashtags);

        await api.post('posts',data);

        this.props.history.push('/');
    }
    render(){
        return (
            <form id='new-post' onSubmit={this.handleSubmit}>
                <input type='file' name='image' onChange={this.handleImageChange} />
                <input type='text' name='autor' placeholder='Autor do post' 
                onChange={this.handleChange} value={this.state.autor}/>
                
                <input type='text' name='place' placeholder='Local do post' 
                onChange={this.handleChange} value={this.state.place}/>

                <input type='text' name='desctription' placeholder='Descrição do post' 
                onChange={this.handleChange} value={this.state.desctription}/>
                
                <input type='text' name='hashtags' placeholder='HashTags do post' 
                onChange={this.handleChange} value={this.state.hashtags}/>
                <button type='submit'>Enviar</button>


            </form>
        );
    }
}

export default New;