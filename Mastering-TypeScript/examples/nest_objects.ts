
type Credits = {
    producers: string[];
    writers: string[];
}

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: Credits;
};

const song: Song = {
    title: "Hung Up",
    artist: "Hot Chelle Rae",
    numStreams: 7_600_000,
    credits: {
        producers: ["Andrew Goldstein", "Dan Book", "Alexei Misoul"],
        writers: ["Ryan Follesé", "Nash Overstreet", "Andrew Goldstein", "Dan Book", "Alexei Misoul"]
    }
};

function calculatePayout(song: Song) {
    return song.numStreams * 0.003;
}

function printSong(song: Song) {
    console.log(`${song.title} - ${song.artist}`);
    console.log(`Produced by ${song.credits.producers.join(", ")}`);
    console.log(`Written by ${song.credits.writers.join(", ")}`);
}

printSong(song);