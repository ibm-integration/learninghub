# Event Automation Level 3

This repo is intended to simplify the copy and paste steps of commands of Event Automation L3. Instead to copy the commands from PDF file, go ahead and use commands from this file.

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
    --param DEPLOY_DATAPOWER_GATEWAY_OPERATOR=false \
    --param DEPLOY_ASSET_REPO=false \
    --param DEPLOY_API_CONNECT=false \
    --param DEPLOY_ACE_SWITCH_SERVER=false \
    --param DEPLOY_ACE_DESIGNER=false \
    --param DEPLOY_ACE_DASHBOARD=false \
    --param DEPLOY_ACE_INTEGRATION_SERVER=false \
    --param DEPLOY_QUEUE_MANAGER=false

```

