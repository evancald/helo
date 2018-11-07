SELECT p.content, p.img, p.title, u.profile_pic, u.username
FROM posts p
JOIN users u ON u.id=p.author_id
WHERE p.title LIKE $1;