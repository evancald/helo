SELECT p.content, p.img, p.title, p.postid, u.profile_pic, u.username, u.id
FROM posts p
JOIN users u ON u.id=p.author_id;