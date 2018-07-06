export default function guidGenerator(timeStamp) {
    return (timeStamp + "-" + Math.random());
}