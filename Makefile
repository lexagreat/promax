push:
	sshpass -p 'aqShrgyH3Qy^Jq' ssh root@188.225.18.241 "cd /root/frontend/; git reset --hard; git pull origin main; docker stop nuxt-app;docker rm nuxt-app; docker compose up -d"