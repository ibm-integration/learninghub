# MQ Level 3

This repo is intended to simplify the copy and paste steps of commands of MQ L3. Instead to copy the commands from PDF file, go ahead and use commands from this file.

The commands are identified by the step number of the Original Demo Guide document.

### 2.3.1
```
git clone https://github.com/gomezrjo/cp4i-tz-deployer-yl.git
```

### 2.3.2
```
cd cp4i-tz-deployer-yl
```

### 2.4.1
```
oc apply -f resources/pipeline1.yaml
```

### 2.4.2
```
tkn pipeline start cp4i-demo \
    --use-param-defaults \
    --workspace name=cp4i-ws,volumeClaimTemplateFile=resources/workspace-template.yaml \
    --pod-template resources/pod-template.yaml \
    --param DEFAULT_SC="ocs-storagecluster-ceph-rbd" \
    --param OCP_BLOCK_STORAGE="ocs-storagecluster-ceph-rbd" \
    --param OCP_FILE_STORAGE="ocs-storagecluster-cephfs" \
    --param DEPLOY_ASSET_REPOSITORY_OPERATOR=false \
    --param DEPLOY_API_CONNECT_OPERATOR=false \
    --param DEPLOY_APP_CONNECT_OPERATOR=false \
    --param DEPLOY_EVENT_STREAMS_OPERATOR=false \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT_OPERATOR=false \
    --param DEPLOY_EA_FLINK_OPERATOR=false \
    --param DEPLOY_EVENT_PROCESSING_OPERATOR=false \
    --param DEPLOY_DATAPOWER_GATEWAY_OPERATOR=false \
    --param DEPLOY_ASSET_REPO=false \
    --param DEPLOY_API_CONNECT=false \
    --param DEPLOY_ACE_SWITCH_SERVER=false \
    --param DEPLOY_ACE_DESIGNER=false \
    --param DEPLOY_ACE_DASHBOARD=false \
    --param DEPLOY_ACE_INTEGRATION_SERVER=false \
    --param DEPLOY_EVENT_STREAMS=false \
    --param DEPLOY_EVENT_ENDPOINT_MANAGEMENT=false \
    --param DEPLOY_EA_FLINK=false \
    --param DEPLOY_EVENT_PROCESSING=false
```

### 2.4.3
```
tkn pipelinerun logs cp4i-demo-run-???? -f -n default 
```

### 2.5.1
```
cd ..
```

### 2.5.2
```
gh auth login --hostname github.ibm.com
```

### 2.5.4
```
gh repo clone github.ibm.com/joel-gomez/cp4i-demo
```

### 2.5.5
```
cd cp4i-demo
```

### 2.6.1
```
https://github.com/ibm-integration/learninghub/blob/main/static/jmsproducer-jgr-demo.jar
```

### 3.3.1.1
```
export CP4I_VER=CD
export OCP_TYPE=ODF
oc new-project cp4i
```

### 3.3.1.2
```
oc apply -f resources/03d-qmgr-uniform-cluster-config.yaml
```

### 3.3.1.3
```
scripts/10d-qmgr-uc-pre-config.sh
```

### 3.3.2.1
```
oc apply -f instances/${CP4I_VER}/${OCP_TYPE}/13a-qmgr-uniform-cluster-qm1.yaml -n cp4i
```

### 3.3.2.2
```
oc apply -f instances/${CP4I_VER}/${OCP_TYPE}/13b-qmgr-uniform-cluster-qm2.yaml -n cp4i
```

### 3.3.2.3
```
oc get queuemanager -n cp4i
```

### 3.3.3.1
```
oc apply -f resources/04a-nginx-ccdt-configmap.yaml
```

### 3.3.3.2
```
oc apply -f resources/04b-nginx-deployment.yaml
```

### 3.3.3.3
```
oc get pods -n cp4i | grep nginx
```

### 3.3.3.4
```
oc apply -f resources/04c-nginx-service.yaml
```

### 3.5.2.2
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.5.4.2
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.6.2.1
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.6.2.3
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.7.2.2
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.7.3.1
```
oc apply -f instances/${CP4I_VER}/${OCP_TYPE}/13b-qmgr-uniform-cluster-qm2.yaml -n cp4i
```

### 3.7.3.2
```
oc get queuemanager -n cp4i
```

### 3.7.4.1
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```

### 3.7.4.3
```
echo 'dis conn(*)' all | runmqsc | grep -i my
```
