// BEGIN
export function Point(x,y) {
    this.x = x
    this.y = y

    this.getX = function() {
        return x
    }

    this.getY = function() {
        return y
    }
}

export function Segment(beginPoint,endPoint) {
    this.beginPoint = beginPoint
    this.endPoint = endPoint

    this.getBeginPoint = function() {
        return this.beginPoint
    }

    this.getEndPoint = function() {
        return this.endPoint
    }

}

export function reverse(segment) {
    const originalBegin = segment.getBeginPoint();
    const originalEnd = segment.getEndPoint();

    const newBegin = new Point(originalEnd.getX(), originalEnd.getY());
    const newEnd = new Point(originalBegin.getX(), originalBegin.getY());

    return new Segment(newBegin, newEnd);
}
// END




