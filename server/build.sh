docker rmi localhost:5000/oof-game-server:latest 2>/dev/null || true
docker rmi oof-game-server:latest 2>/dev/null || true
docker rmi oof-game-server 2>/dev/null || true

docker build -t oof-game-server -f ../../oof-game-example/server/Dockerfile .
docker tag oof-game-server:latest localhost:5000/oof-game-server:latest
docker push localhost:5000/oof-game-server:latest