import React from "react";

const arts = {
    art1: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
    art2: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
    art3: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
    art4: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
    art5: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
    art6: {
        img: 'https://th.bing.com/th/id/R.4f91f136d3d13fda7a69cae8e50148bb?rik=eiunAMZGuhM1yA&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG15.png&ehk=mS8h0OuegRxz0xh4DGNG7436%2bFRPpHiqYRBGaogdguA%3d&risl=&pid=ImgRaw&r=0',
        title: 'The Parasite Queen',
        description: '',
        id: '',
    },
}


function Art() {
    return (
        <div className="art">
            <img src={arts.art1.img} alt="Art" className='art-img' />
            <div className="display art-title">
                <p>{arts.art1.title}</p>
            </div>
        </div>
        
    )
}

export default Art;