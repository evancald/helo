SELECT p.postid, p.title, p.content, p.img, u.profile_pic, u.username
FROM posts p
JOIN users u ON u.id=p.author_id
WHERE p.postid=$1;