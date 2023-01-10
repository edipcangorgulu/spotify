import Section from "components/Section"

const Home = () => {
    const items = [
        {
            id: 1,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/248/248119_3826384-lq.mp3'
        },
        {
            id: 2,
            title: 'FJAAK Mix',
            description: 'PAWSA,Sosa UK,Enrico Sangiuliano ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/4qG1qjeHfkASTdyRGbLWbV/tr/default',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/668/668929_9034501-lq.mp3'
        },
        {
            id: 3,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'artist',
            src: 'https://cdn.freesound.org/previews/668/668509_1137749-lq.mp3'
        },
        {
            id: 4,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'podcast',
            src: 'https://cdn.freesound.org/previews/668/668518_14566169-lq.mp3'
        },
        {
            id: 5,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/667/667483_9034501-lq.mp3'
        }
        ,
        {
            id: 5,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'album',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        }
        ,
        {
            id: 5,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'album'
        }
        ,
        {
            id: 5,
            title: 'Sefo Mix',
            description: 'Yüzyüzeyken Konuşuruz,Murda,Reynmen ve daha fazlası',
            artist: 'EdipCan',
            image: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/1ITjgqpqMDJlqZGAK3mlPQ/tr/large',
            type: 'album'
        }
    ]

    return (
        <div className="grid gap-y-8">
            <Section
                title="En çok dinlediğin mix'ler"
                more="/blabla"
                items={items} />
            <Section
                title="Bugün için tavsiye"
                more="/blabla"
                items={items} />
            <Section
                title="Yakınlarda Çalınanlar"
                more="/blabla"
                items={items} />




        </div>
    )
}

export default Home