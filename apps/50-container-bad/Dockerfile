FROM ubuntu:22.04
RUN apt-get update && apt-get install -y curl python3 # sin pins ni limpieza
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["bash","-lc","python3 -m http.server 3000"]
