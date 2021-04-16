import './Mood.css';
const Mood = () => {

        const moods = [{
                name: 'excited',
                emoji: '🤗',
                restaurants: [
                    { name: '', imageUrl: '' }
                ]
            },
            { name: 'happy', emoji: '😊' },
            { name: 'sad', emoji: '😟' },
            { name: 'depressed', emoji: '😞' },
            { name: 'in love', emoji: '😍' },
        ]



        return ( <
                div className = 'mood-container' >
                <
                h2 > Mood < /h2> <
                div className = 'moods' > {
                    moods.map(mood => < button title = { mood.name }
                        className = 'mood' > { mood.emoji } < /button>)
                    } <
                    /div>


                    <
                    /div>);
                }

                export default Mood;