KIND_CLUSTER ?= devsecops

.PHONY: kind-up kind-down build load helm deploy open

kind-up:
	kind create cluster --name $(KIND_CLUSTER) --wait 120s

kind-down:
	kind delete cluster --name $(KIND_CLUSTER)

build:
	cd apps/00-safe-baseline && docker build -t demo-app:local .

load:
	kind load docker-image demo-app:local --name $(KIND_CLUSTER)

helm:
	helm upgrade --install demo charts/demo-app --set image.repository=demo-app --set image.tag=local --set service.type=NodePort

deploy: build load helm

open:
	python3 - <<'PY'
import webbrowser; webbrowser.open('http://localhost:30080')
PY
