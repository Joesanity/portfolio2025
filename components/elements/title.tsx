export default function Title({ text, isLeft = false } : { text : string, isLeft? : boolean }) {

    let classes = "text-4xl font-bold font-sans my-12 "

    if (isLeft) {
        classes += "text-left"
    }
    else if (!isLeft) {
        classes += "text-center"
    }

  return (
    <h2 className={classes}>{text}</h2>
  );
}
