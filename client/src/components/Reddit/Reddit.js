import React, { Component } from 'react';
import Subreddits from "../Subreddits";
import Card from '../Card';
// import { createDecipher } from 'crypto';

const subs = [
    {
        name: "food",
        isChosen: true
    },
    {
        name: "Pixar",
        isChosen: false
    },
    {
        name: "aww",
        isChosen: false
    },
    {
        name: "wallpaper",
        isChosen: false
    },
    {
        name: "travel",
        isChosen: false
    },
    {
        name: "pics",
        isChosen: false
    }
]

class Reddit extends Component {

    constructor(props) {
        super(props);
        this.foodSubreddit = "food"
        this.pixarSubreddit = "Pixar"
        this.funnyReddit = "funny"

        this.url = 'https://www.reddit.com/r/';
        this.sorts = 'hot';
    }

    state = {
        subs,
        chosenSubreddit: 'food',
        sort: 'hot',
        files: [],
        after: null,
        before: null,
        page: 1
    };

    componentDidMount() {
        this.changeSubreddit(this.state.chosenSubreddit)
    }

    nextPage = () => {
        fetch(this.url + this.state.chosenSubreddit + "/" + this.state.sort + ".json?count=" + (this.state.page * 25) + "&after=" + this.state.after)
            .then(res => res.json())
            .then((data) => {
                this.setState(() => ({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before,
                    page: this.state.page + 1
                }))
            })
            .catch(console.log)
    }

    changeSubreddit = sub => {
        this.setState({
            files: [],
            chosenSubreddit: sub,
            page: 1
        });
        fetch(this.url + sub + "/" + this.state.sort + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    files: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                });
                // for(var i = 0; i < this.state.files.length; i++) {
                //     if(this.state.files[i].data.preview.enabled) {
                //         console.log(this.state.files[i])
                //     }
                // }
                console.log(this.state.files)
                window.scrollTo(0, 0)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <div className='row'>
                    {this.state.subs.map(sub => (

                        <Subreddits
                            changeSubreddit={() => this.changeSubreddit(sub.name)}
                            name={sub.name}
                            key={sub.name}
                        />

                    ))}
                </div>
                <div className='row'>
                    {this.state.files.map(file => (
                        <Card
                            file={file}
                            image={file.image}
                            title={file.data.title}
                            key={file.data.id}
                        />
                    ))}
                </div>
            </div>

        )
    }
}






export default Reddit;
