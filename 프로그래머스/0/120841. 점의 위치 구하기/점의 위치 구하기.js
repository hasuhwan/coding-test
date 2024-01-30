function solution(dot) {
    const [x,y]=dot;
    return x>0&&y>0?1:(x<0&&y>0)?2:(x<0&&y<0)?3:4;
}