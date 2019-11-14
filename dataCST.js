//This is the 2D Frame script extended out to 3D Frame calculations

//Gradient generator credit: https://www.strangeplanet.fr/work/gradient-generator/index.php

var undeformed  = [{state: true}];
var deformed = [{state: true}];
var scene = document.querySelector('a-scene');
var DefNode = [];
var NodeList = [];
var matProps = [
    {YoungsModulus: 2E7},
    {poissonsRatio: 0.3},
    {maxAllowableStress: 1E8},
    {scaleFactor: 1.0}
];


var Node =
    [ { nodeName: 'Node0',
       x: 0,
       y: 0.400000006,
       z: 0.5,
       fixedX: 0,
       fixedY: 0,
       fixedZ: 1,
       xRot: 0,
       yRot: 0,
       zRot: 0,
       forceX: 0,
       forceY: 0,
       forceZ: 0,
       fdist: 0 },
     { nodeName: 'Node1',
      x: -1,
      y: 1,
      z: 0.5,
      fixedX: 1,
      fixedY: 1,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node2',
      x: -0.400000006,
      y: 0,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node3',
      x: 0,
      y: -0.400000006,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node4',
      x: -1,
      y: -1,
      z: 0.5,
      fixedX: 1,
      fixedY: 1,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node5',
      x: 0.400000006,
      y: 0,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node6',
      x: 1,
      y: 1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 10000,
      forceY: -10000,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node7',
      x: 1,
      y: -1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: -100000,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node8',
      x: -0.333333343,
      y: 1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node9',
      x: -1,
      y: 0.333333343,
      z: 0.5,
      fixedX: 1,
      fixedY: 1,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node10',
      x: -0.282842726,
      y: 0.282842726,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node11',
      x: -0.282842726,
      y: -0.282842726,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node12',
      x: -1,
      y: -0.333333343,
      z: 0.5,
      fixedX: 1,
      fixedY: 1,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node13',
      x: -0.333333343,
      y: -1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node14',
      x: 0.282842726,
      y: 0.282842726,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node15',
      x: 1,
      y: 0.333333343,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: -10000,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node16',
      x: 0.333333343,
      y: 1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node17',
      x: 0.333333343,
      y: -1,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node18',
      x: 1,
      y: -0.333333343,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: -10000,
      forceZ: 0,
      fdist: 0 },
     { nodeName: 'Node19',
      x: 0.282842726,
      y: -0.282842726,
      z: 0.5,
      fixedX: 0,
      fixedY: 0,
      fixedZ: 1,
      xRot: 0,
      yRot: 0,
      zRot: 0,
      forceX: 0,
      forceY: 0,
      forceZ: 0,
      fdist: 0 } ];

var Tri =
    [ { elemName: 'Tri0', nodeA: 1, nodeB: 8, nodeC: 10 },
     { elemName: 'Tri1', nodeA: 8, nodeB: 10, nodeC: 0 },
     { elemName: 'Tri2', nodeA: 8, nodeB: 16, nodeC: 0 },
     { elemName: 'Tri3', nodeA: 16, nodeB: 14, nodeC: 0 },
     { elemName: 'Tri4', nodeA: 16, nodeB: 6, nodeC: 14 },
     { elemName: 'Tri5', nodeA: 6, nodeB: 15, nodeC: 14 },
     { elemName: 'Tri6', nodeA: 14, nodeB: 15, nodeC: 5 },
     { elemName: 'Tri7', nodeA: 5, nodeB: 15, nodeC: 18 },
     { elemName: 'Tri8', nodeA: 5, nodeB: 18, nodeC: 19 },
     { elemName: 'Tri9', nodeA: 19, nodeB: 18, nodeC: 7 },
     { elemName: 'Tri10', nodeA: 19, nodeB: 7, nodeC: 17 },
     { elemName: 'Tri11', nodeA: 19, nodeB: 17, nodeC: 3 },
     { elemName: 'Tri12', nodeA: 3, nodeB: 17, nodeC: 13 },
     { elemName: 'Tri13', nodeA: 3, nodeB: 13, nodeC: 11 },
     { elemName: 'Tri14', nodeA: 11, nodeB: 13, nodeC: 4 },
     { elemName: 'Tri15', nodeA: 11, nodeB: 4, nodeC: 12 },
     { elemName: 'Tri16', nodeA: 11, nodeB: 12, nodeC: 2 },
     { elemName: 'Tri17', nodeA: 2, nodeB: 12, nodeC: 9 },
     { elemName: 'Tri18', nodeA: 2, nodeB: 9, nodeC: 10 },
     { elemName: 'Tri19', nodeA: 10, nodeB: 9, nodeC: 1 } ];

var recompute = [{Analyze: function(){DoAnalysis()}},
                 {Reset: function(){
                     for (var i = 0; i < Node.length; i = i+1) {
                         if(Node[i].forceY != 0){
                             var idCheck = 'Node'+String(i)+'.fy';
                             var arr = document.getElementById(idCheck);
                             arr.setAttribute('visible', 'false');
                             Node[i].forceY = 0;
                         }
                         if(Node[i].forceX != 0){
                             var idCheck = 'Node'+String(i)+'.fx';
                             var arr = document.getElementById(idCheck);
                             arr.setAttribute('visible', 'false');
                             Node[i].forceX = 0;
                         }
                         if(Node[i].forceZ != 0){
                             var idCheck = 'Node'+String(i)+'.fz';
                             var arr = document.getElementById(idCheck);
                             arr.setAttribute('visible', 'false');
                             Node[i].forceZ = 0;
                         }
                         Node[i].x = resetNode[i].x;
                         Node[i].y = resetNode[i].y;
                         Node[i].z = resetNode[i].z;

                         var moveNode = document.getElementById(Node[i].nodeName);
                         moveNode.setAttribute('position', {x: Node[i].x, y: Node[i].y, z: Node[i].z});
                     }

                     matProps[0].YoungsModulus = 1.5E9;
                     matProps[1].radius = 0.01;
                     matProps[2].maxAllowableStress = 1E8;
                     matProps[3].scaleFactor = 1.0;


                     updateStruct();
                     for (var i = 0; i < Elem.length; i = i+1) {
                         var tube = document.getElementById('DefElem'+String(i));
                         var color = '#texture0';
                         AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
                     }
                 }}];

function viewUndef(){
    var model = document.getElementById('undefModel');
    var current = undeformed[0].state;
    if(current == true){
        model.setAttribute('visible', 'true');
    }
    else if(current == false){
        model.setAttribute('visible', 'false');
    }
};

function viewDef(){
    var model = document.getElementById('defModel');
    var current = deformed[0].state;
    if(current == true){
        model.setAttribute('visible', 'true');
    }
    else if(current == false){
        model.setAttribute('visible', 'false');
    }
}

//var color = gradient[2];
// Textures generated at:https://angrytools.com/gradient/image/
//var gradient = [ "#001EFF", "#3CFF00", "#FFEE00", "#FFAE00", "#FF7300", "#FF0000", "#FFFFFF"];
//var gradient = ['0 30 255','60 255 0','255 238 0','255 174 0','255 155 0','255 255 255'];
//var gradient = ["#001EFF", "#1469AA", "#28B455", "#3CFF00", "#9DF600", "#FFEE00", "#FFCE00", "#FFAE00", "#FF9000", "#FF7300", "#FF3900", "#FF0000", "#FF7F7F", "#FFFFFF"];

function changeThic(){
    for (var j = 0; j < Elem.length; j = j+1) {
        Elem[j].thic = matProps[1].radius;
        tube = document.getElementById(Elem[j].elemName);
        if (tube != null){
            tube.setAttribute('radius', Elem[j].thic);
        }
        defTube = document.getElementById('Def'+Elem[j].elemName);
        if (defTube != null){
            defTube.setAttribute('radius', Elem[j].thic);
        }
    }
}

function changeScale(){
    var scale = matProps[3].scaleFactor;
    console.log(scale);
    var scaleF = '';
    scaleF = scaleF.concat(scale, ' ', scale, ' ', scale) ;
    var undef = document.getElementById('undefModel');
    undef.setAttribute('scale', scaleF);
    var def = document.getElementById('defModel');
    def.setAttribute('scale', scaleF);

    DoAnalysis();
}

function vizChangeY(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fy';
        var arr = document.getElementById(idCheck);
        var forceY = Node[i].forceY;
        var offset = 0.215;

        if(forceY==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceY>0){
            var rotation = '0 0 0'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        else if(forceY<0){
            offset = -offset;
            var rotation = '0 0 180'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        var pos = {x: 0, y: offset, z: 0};
        arr.setAttribute('position', pos);
    }
}
function vizChangeX(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fx';
        var arr = document.getElementById(idCheck);
        var forceX = Node[i].forceX;
        var offset = 0.215;

        if(forceX==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceX>0){
            var rotation = '0 0 -90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        else if(forceX<0){
            offset = -offset;
            var rotation = '0 0 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
        }
        var pos = {x: offset, y: 0, z: 0};
        arr.setAttribute('position', pos);
    };
}
function vizChangeZ(){
    for (var i = 0; i < Node.length; i = i+1) {
        var idCheck = 'Node'+String(i)+'.fz';
        var arr = document.getElementById(idCheck);
        var forceZ = Node[i].forceZ;
        var offset = 0.215;

        if(forceZ==0){
            arr.setAttribute('visible', 'false');
        }
        else if(forceZ>0){
            var rotation = '0 270 -90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            arr.setAttribute('position', pos);
        }
        else if(forceZ<0){
            offset = -offset;
            var rotation = '0 270 90'
            arr.setAttribute('visible', 'true');
            arr.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            arr.setAttribute('position', pos);
        }

    }
}

function addForceArrow (nodeID, force, dir) {
    var scene = document.querySelector('a-scene');
    var nodeUsed = document.getElementById(nodeID);

    var cyl = document.createElement('a-entity');
    cyl.setAttribute('mixin', 'down Cyl');
    nodeUsed.appendChild(cyl);
    var cone = document.createElement('a-entity');
    var offset = 0.215;
    cone.setAttribute('mixin', 'Cone');
    cyl.appendChild(cone);
    if(dir == 'y'){
        var cylID = String(nodeID.substr(3))+'.fy';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 0 0'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
        }
        else if(force<0){
            var rotation = '0 0 180'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            offset = -offset;
        }
        var pos = {x: 0, y: offset, z: 0};
        cyl.setAttribute('position', pos);
    }
    else if(dir =='x'){
        var cylID = String(nodeID.substr(3))+'.fx';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 0 -90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
        }
        else if(force<0){
            var rotation = '0 0 90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            offset = -offset;
        }
        var pos = {x: offset, y: 0, z: 0};
        cyl.setAttribute('position', pos);
    }
    else if(dir =='z'){
        var cylID = String(nodeID.substr(3))+'.fz';
        cyl.setAttribute('id', cylID);
        if(force==0){
            cyl.setAttribute('visible', 'false');
        }
        else if(force>0){
            var rotation = '0 270 -90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            cyl.setAttribute('position', pos);
        }
        else if(force<0){
            offset = -offset;
            var rotation = '0 270 90'
            cyl.setAttribute('visible', 'true');
            cyl.setAttribute('rotation', rotation);
            var pos = {x: 0, y: 0, z: offset};
            cyl.setAttribute('position', pos);
        }
    }
}

function plotDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-entity');
    var parent = document.getElementById('undefModel');
    sphere.setAttribute('class', 'node');
    sphere.setAttribute('mixin', 'node');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', "#ffffff");
    sphere.setAttribute('id', id);
    parent.appendChild(sphere);
    //console.log(Object.keys(sphere.components).length);
    //console.log(Object.values(sphere.components));

    if(Node[Number(id.substr(4))].fixedX == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressX','true');}

    if(Node[Number(id.substr(4))].fixedY == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressY','true');}

    if(Node[Number(id.substr(4))].fixedZ == 1){ AFRAME.utils.entity.setComponentProperty(sphere,'grabbable.suppressZ','true');}

    //console.log(sphere.getAttribute('suppressX'));

    // Functions after this //
    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        var i = sphere.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        if(Node[Number(id.substr(4))].fixedX == 1){
            var textToShow = id.concat(' = Fixed');
        }
        else{
            var textToShow = id.concat(' , Force = ', String(Node[i].forceY));
        }
        text.setAttribute('value',textToShow);
        text.setAttribute('visible',true);
        sphere.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
    });
    sphere.addEventListener('mouseleave', function () {
        sphere.setAttribute('scale', {x: 1, y: 1, z: 1});
        text.setAttribute('visible',false);
    });
    sphere.addEventListener('grab-end', function (evt) {
        //console.log(sphere.getAttribute('id'));
        //console.log(sphere.getAttribute('position').x);
        var i = sphere.getAttribute('id').substr(4);
        Node[i].x = sphere.getAttribute('position').x;
        Node[i].y = sphere.getAttribute('position').y;
        Node[i].z = sphere.getAttribute('position').z;
        updateStruct();
    });

};

function plotDefDot (scene, position, size, color, id, text) {
    var sphere = document.createElement('a-sphere');
    var parent = document.getElementById('defModel');
    sphere.setAttribute('radius', size);
    sphere.setAttribute('position', position);
    sphere.setAttribute('color', "#000000");
    sphere.setAttribute('id', id);

    sphere.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        var i = sphere.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        var textToShow = id.concat(' , ForceY = ', String(Node[i].forceY));
        text.setAttribute('value',textToShow);
        text.setAttribute('visible',true);
        sphere.setAttribute('scale', {x: 1.3, y: 1.3, z: 1.3});
    });
    sphere.addEventListener('mouseleave', function () {
        sphere.setAttribute('scale', {x: 1, y: 1, z: 1});
        text.setAttribute('visible',false);
    });
    //console.log(sphere);
    parent.appendChild(sphere);

    addForceArrow(id,Node[Number(id.substr(7))].forceY,'y');
    addForceArrow(id,Node[Number(id.substr(7))].forceX,'x');
    //addForceArrow(id,Node[Number(id.substr(7))].forceZ,'z');
};

function TriMaker(nodeA,nodeB,nodeC,color){
    var points = [];
    points.push(new THREE.Vector2(nodeA.x,nodeA.y)); //nodeA
    points.push(new THREE.Vector2(nodeB.x,nodeB.y)); //nodeB
    points.push(new THREE.Vector2(nodeC.x,nodeC.y)); //nodeC

    var shape = new THREE.Shape(points);
    //var geometry = new THREE.ShapeGeometry(shape);
    var material = new THREE.MeshBasicMaterial({
        color: color
    });

    var extrudeSettings = {
        steps: 2,
        depth: 0.1,
        bevelEnabled: false
    };

    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var mesh = new THREE.Mesh(geometry, material);
    
    return mesh
}


function plotTri (scene,Tri,color,id) {
    var parent = document.getElementById('undefTri');
    var newTri = document.createElement('a-entity');
    mesh = TriMaker(Node[Tri.nodeA],Node[Tri.nodeB],Node[Tri.nodeC],color);
    newTri.object3D.add(mesh);
    newTri.setAttribute('id', id);
    parent.appendChild(newTri);
    //
};

function plotDefTri (scene,Tri,color,id) {
    var parent = document.getElementById('defTri');
    var newTri = document.createElement('a-entity');
    mesh = TriMaker(DefNode[Tri.nodeA],DefNode[Tri.nodeB],DefNode[Tri.nodeC],color);
    newTri.object3D.add(mesh);
    newTri.setAttribute('id', id);
    parent.appendChild(newTri);
    //
};

function updateTri (Tri,color,id) {
    var parent = document.getElementById('undefTri');
    var oldTri = document.getElementById(id);
    oldTri.object3D.remove(oldTri.object3D.children[0]);

    mesh = TriMaker(Node[Tri.nodeA],Node[Tri.nodeB],Node[Tri.nodeC],color);
    oldTri.object3D.add(mesh);
    //parent.appendChild(oldTri);
}

function updateDefTri (Tri,color,id) {
    var parent = document.getElementById('defTri');
    var oldTri = document.getElementById(id);
    oldTri.object3D.remove(oldTri.object3D.children[0]);

    mesh = TriMaker(DefNode[Tri.nodeA],DefNode[Tri.nodeB],DefNode[Tri.nodeC],color);
    oldTri.object3D.add(mesh);
    //parent.appendChild(oldTri);
    //
};

function plotTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    var parent = document.getElementById('undefModel');
    //var location = new THREE.Vector3(0,0,0);
    //console.log(location);
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('material', color);
    tube.setAttribute('shader', 'standard');
    tube.setAttribute('id', id);
    AFRAME.utils.entity.setComponentProperty(tube,'material.blending','additive');
    AFRAME.utils.entity.setComponentProperty(tube,'material.opacity',0.75);
    /*
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        //console.log(newTextPos);
        text.setAttribute('position',newTextPos);
        text.setAttribute('value',id);
        text.setAttribute('visible',true);
        tube.setAttribute('material', "color:white");
    });
    tube.addEventListener('mouseleave', function () {
        tube.setAttribute('material', color);
        text.setAttribute('visible',false);
    });*/
    //console.log(tube);
    parent.appendChild(tube);
};

function plotDefTube (scene, position, size, color, id, text) {
    var tube = document.createElement('a-tube');
    var parent = document.getElementById('defModel');
    tube.setAttribute('class', 'elem');
    tube.setAttribute('mixin', 'elem');
    tube.setAttribute('radius', size);
    tube.setAttribute('path', position);
    //tube.setAttribute('position', location);
    tube.setAttribute('shader', 'standard');

    tube.setAttribute('id', id);
    AFRAME.utils.entity.setComponentProperty(tube,'material.src',color);
    //AFRAME.utils.entity.setComponentProperty(tube,'material.side','back');

    //tube.setAttribute('material.side', 'back');
    tube.addEventListener('mouseenter', function (evt) {
        var oldTextPos = evt.detail.intersection.point;
        var newTextPos = {x: oldTextPos.x - 0.25, y: oldTextPos.y - 0.25, z: oldTextPos.z + 0.25}
        var i = tube.getAttribute('id').substr(4);
        text.setAttribute('position',newTextPos);
        //var textToShow = id.concat(' , Stress = ', String(round(math.subset(stress,math.index(Number(i),0))/1E6),2)+ ' Mpa');
        //text.setAttribute('value',textToShow);
        text.setAttribute('visible',true);
    });
    tube.addEventListener('mouseleave', function () {
        text.setAttribute('visible',false);
    });
    //console.log(tube);
    parent.appendChild(tube);
    //ascene = document.getElementById('scene');
    //ascene.appendChild(tube);
};


function myPrint(){
    console.log('Look what I can do!');
};

function updateStruct(){
    //console.log('Moved sphere, time to redraw tube');

    for (var j = 0; j < Tri.length; j = j+1) {
        updateTri(Tri[j],'#0000ff',Tri[j].elemName);
    }
    DoAnalysis();
};

var DoAnalysis = function(){
    // Node[0].DOF = 2; //Adding a value-pair to a JSON object
    // This Script is being updated for 3D Frame

    console.log("Doing 3D Analysis");
    var numTri = Tri.length;
    var numNodes = Node.length;
    var nodeDOFs = 2; //DOFS per Node
    var gDOF = numNodes*nodeDOFs; //Total DOFs for system

    var Kglobal = math.zeros(gDOF, gDOF);
    var Qglobal = math.zeros(gDOF,1);
    var dispBCs = math.zeros(gDOF, 1);
    var stresses = math.zeros(numTri, 1);

    //var kArray = math.zeros(numElem, 10);

    var triDOFs = math.zeros(numTri, 6);

    //Problem Parameters defined here
    var E = matProps[0].YoungsModulus;
    var G = E/2.8;
    var t = 0.2;
    var nu = matProps[1].poissonsRatio;
    var maxAllowableStress = matProps[2].maxAllowableStress;
    var scaleFactor = matProps[3].scaleFactor;

    var D = math.multiply((E/(1-math.square(nu))),math.matrix([[1,nu,0],
                                                               [nu,1,0],
                                                               [0,0,(1-nu)/2]]));

    for (var i = 0; i < numNodes; i = i+1) {
        // Encodes dispBCs from Nodal data
        dispBCs.subset(math.index((nodeDOFs*i),0),Node[i].fixedX);
        dispBCs.subset(math.index((nodeDOFs*i)+1,0),Node[i].fixedY);

        //Encodes Global Q matrix from Nodal data
        Qglobal.subset(math.index((nodeDOFs*i),0),Node[i].forceX);
        Qglobal.subset(math.index((nodeDOFs*i)+1,0),Node[i].forceY);
    }

    //Element and Node Connectivity defined here
    for (var i = 0; i < numTri; i = i+1) {

        triDOFs = math.subset(triDOFs,math.index(i,0),(Tri[i].nodeA+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,1),(Tri[i].nodeA+1)*nodeDOFs-1);
        triDOFs = math.subset(triDOFs,math.index(i,2),(Tri[i].nodeB+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,3),(Tri[i].nodeB+1)*nodeDOFs-1);
        triDOFs = math.subset(triDOFs,math.index(i,2),(Tri[i].nodeC+1)*nodeDOFs-2);
        triDOFs = math.subset(triDOFs,math.index(i,3),(Tri[i].nodeC+1)*nodeDOFs-1);

        var elementDOF = [(Tri[i].nodeA+1)*2-2,(Tri[i].nodeA+1)*2-1,(Tri[i].nodeB+1)*2-2,(Tri[i].nodeB+1)*2-1,(Tri[i].nodeC+1)*2-2,(Tri[i].nodeC+1)*2-1];

        var x1 = Node[Tri[i].nodeA].x;
        var y1 = Node[Tri[i].nodeA].y;
        var x2 = Node[Tri[i].nodeB].x;
        var y2 = Node[Tri[i].nodeB].y;
        var x3 = Node[Tri[i].nodeC].x;
        var y3 = Node[Tri[i].nodeC].y;

        var x_c = (x1+x2+x3)/3;
        var y_c = (y1+y2+y3)/3;

        var a = math.sqrt(math.square(x2-x1) + math.square(y2-y1));
        var b = math.sqrt(math.square(x3-x1) + math.square(y3-y1));
        var c = math.sqrt(math.square(x3-x2) + math.square(y3-y2));
        var s = 0.5*(a+b+c);
        var A = math.sqrt(s*(s-a)*(s-b)*(s-c));

        var a1 = x2*y3 - x3*y2;
        var a2 = x3*y1 - x1*y3;
        var a3 = x1*y2 - x2*y1;
        var b1 = y2-y3;
        var b2 = y3-y1;
        var b3 = y1-y2;
        var c1 = x3-x2;
        var c2 = x1-x3;
        var c3 = x2-x1;

        var B = math.multiply((1/(2*A)),math.matrix([[b1,0,b2,0,b3,0],
                                                     [0,c1,0,c2,0,c3],
                                                     [c1,b1,c2,b2,c3,b3]]));

        var B_t = math.transpose(B)

        var Kelem = math.multiply(A,t,B_t,D,B);

        for (var j = 0; j < elementDOF.length; j = j+1) {
            for (var k = 0; k < elementDOF.length; k = k+1) {
                var newIndex1 = elementDOF[j];
                var newIndex2 = elementDOF[k];
                var newK = math.add(Kglobal.subset(math.index(newIndex1,newIndex2)), Kelem.subset(math.index(j,k)));
                //console.log(newK);
                Kglobal.subset(math.index(newIndex1,newIndex2), newK);
            }
        }
    }


    // Enforce Displacement BCs through penalty method


    for (var i = 0; i < dispBCs._size[0]; i = i+1) {
        var BCindex = math.subset(dispBCs,math.index(i,0));

        //if Node is fixed
        if (BCindex == 1){

            for (var j = 0; j < gDOF; j = j+1) {
                Kglobal.subset(math.index(i,j),0);
                Kglobal.subset(math.index(j,i),0);
                Qglobal.subset(math.index(i,0),0);
                Kglobal.subset(math.index(i,i),1);
            }
            //Kglobal.subset(math.index(i,i),math.multiply(math.subset(Kglobal,math.index(i,i)),1E15)); //Multiplies ii in Kglobal by 1E15 if fixed
            //math.subset(Qglobal,math.index(i,0),math.multiply(math.subset(Kglobal,math.index(i,i)),0)); //Cancels out forces at node if fixed
        }
    }

    var Kinv = math.inv(Kglobal)
    var qGlobal = math.multiply(Kinv,Qglobal);

    // Solve for Von Mises Stress here
    for (var i = 0; i < numTri; i = i+1) {

        var elementDOF = [(Tri[i].nodeA+1)*2-2,(Tri[i].nodeA+1)*2-1,(Tri[i].nodeB+1)*2-2,(Tri[i].nodeB+1)*2-1,(Tri[i].nodeC+1)*2-2,(Tri[i].nodeC+1)*2-1];

        var x1 = Node[Tri[i].nodeA].x;
        var y1 = Node[Tri[i].nodeA].y;
        var x2 = Node[Tri[i].nodeB].x;
        var y2 = Node[Tri[i].nodeB].y;
        var x3 = Node[Tri[i].nodeC].x;
        var y3 = Node[Tri[i].nodeC].y;

        var a = math.sqrt(math.square(x2-x1) + math.square(y2-y1));
        var b = math.sqrt(math.square(x3-x1) + math.square(y3-y1));
        var c = math.sqrt(math.square(x3-x2) + math.square(y3-y2));
        var s = 0.5*(a+b+c);
        var A = math.sqrt(s*(s-a)*(s-b)*(s-c));

        var a1 = x2*y3 - x3*y2;
        var a2 = x3*y1 - x1*y3;
        var a3 = x1*y2 - x2*y1;
        var b1 = y2-y3;
        var b2 = y3-y1;
        var b3 = y1-y2;
        var c1 = x3-x2;
        var c2 = x1-x3;
        var c3 = x2-x1;

        var B = math.multiply((1/(2*A)),math.matrix([[b1,0,b2,0,b3,0],
                                                     [0,c1,0,c2,0,c3],
                                                     [c1,b1,c2,b2,c3,b3]]));

        var qelem = math.matrix([[qGlobal.subset(math.index(elementDOF[0],0))],
                                 [qGlobal.subset(math.index(elementDOF[1],0))],
                                 [qGlobal.subset(math.index(elementDOF[2],0))],
                                 [qGlobal.subset(math.index(elementDOF[3],0))],
                                 [qGlobal.subset(math.index(elementDOF[4],0))],
                                 [qGlobal.subset(math.index(elementDOF[5],0))]]);

        var elStrain = math.multiply(B, qelem);
        var elStress = math.multiply(D, elStrain);

        var stressVM = math.sqrt(0.5*math.square(elStress.subset(math.index(0,0)) - elStress.subset(math.index(1,0))) + 6*elStress.subset(math.index(2,0)));
        stresses.subset(math.index(i,0),stressVM)
        console.log(stressVM);

    }


    var deformedNodes = math.zeros(numNodes,3);
    for (var i = 0; i < numNodes; i = i+1) {
        deformedNodes.subset(math.index(i,0), Node[i].x + math.subset(qGlobal,math.index(nodeDOFs*i,0)));
        deformedNodes.subset(math.index(i,1), Node[i].y + math.subset(qGlobal,math.index((nodeDOFs*i)+1,0)));
        deformedNodes.subset(math.index(i,2), Node[i].z);
    }
    //console.log(deformedNodes);



    for (i = 0; i < numNodes; i = i+1) {
        //Node Objects are created and characterized here

        DefNode[i] = { DefnodeName : 'DefNode'+ String(i), x : math.subset(deformedNodes,math.index(i,0)),
                      y : math.subset(deformedNodes,math.index(i,1)), z : math.subset(deformedNodes,math.index(i,2))};
    }

    //console.log(DefNode);
    var scene = document.querySelector('a-scene');
    var detailText = document.getElementById('detailText');

    console.log('FEA Calculations complete');

    var i = 0;
    for (let item of Node) {
        //console.log(Node[i].x);
        newNode = document.getElementById('Def'+Node[i].nodeName);
        if (newNode != null){
            newNode.setAttribute('position', {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z});
        }
        else{
            plotDefDot(scene, {x: DefNode[i].x, y: DefNode[i].y, z: DefNode[i].z}, 0.1, "#000000", 'Def'+Node[i].nodeName, detailText);
        }
        i = i+1;
    };
    var stressDiv = maxAllowableStress/7;
    updateLegend(stressDiv,maxAllowableStress);
    //console.log(Node);

    //console.log(stress);

    for (var j = 0; j < Tri.length; j = j+1) {
        var entity = document.getElementById('Def'+Tri[j].elemName);

        var color = stressColor(stresses.subset(math.index(j,0)), stressDiv);

        if (entity != null){
            updateDefTri(Tri[j],color,'Def'+Tri[j].elemName);
        }
        else{
            plotDefTri(scene,Tri[j],color,'Def'+Tri[j].elemName);
        }
    }
};

function updateLegend(stressDiv, maxAllowableStress){
    var lg0 = document.getElementById('lg0');
    lg0.setAttribute('value','<'+ String(round(stressDiv*1/1E6, 2)) +' MPa');
    var lg1 = document.getElementById('lg1');
    lg1.setAttribute('value','<'+ String(round(stressDiv*2/1E6, 2)) +' MPa');
    var lg2 = document.getElementById('lg2');
    lg2.setAttribute('value','<'+ String(round(stressDiv*3/1E6, 2)) +' MPa');
    var lg3 = document.getElementById('lg3');
    lg3.setAttribute('value','<'+ String(round(stressDiv*4/1E6, 2)) +' MPa');
    var lg4 = document.getElementById('lg4');
    lg4.setAttribute('value','<'+ String(round(stressDiv*5/1E6, 2)) +' MPa');
    var lg5 = document.getElementById('lg5');
    lg5.setAttribute('value','<'+ String(round(stressDiv*6/1E6, 2)) +' MPa');
    var lg6 = document.getElementById('lg6');
    lg6.setAttribute('value','<'+ String(round(stressDiv*7/1E6, 2)) +' MPa');
    var lg7 = document.getElementById('lg7');
    lg7.setAttribute('value','>='+ String(round(maxAllowableStress/1E6, 2)) +' MPa');
}



function stressColor(elemStress, stressDiv){
    var segment = round(elemStress/(stressDiv+1));
    //console.log(elemStress);
    //console.log(segment);

    if (segment==1){var color = "0x#001EFF";}
    else if (segment==2){var color = "0x#3CFF00";}
    else if (segment==3){var color = "0x#FFEE00";}
    else if (segment==4){var color = "0x#FFAE00";}
    else if (segment==5){var color = "0x#FF7300";}
    else if (segment==6){var color = "0x#FF0000";}
    else if (segment>=7){var color = "#FFFFFF";}

    console.log(color);
    //color = 'color: '.concat(color);
    return color;
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

AFRAME.registerComponent('web-cst', {
    init: function () {
        console.log("DOM fully loaded and parsed");
        var scene = this.el;
        //console.log(scene);
        var detailText = document.getElementById('detailText');
        //console.log(detailText);
        var i = 0;
        //var scaleFactor = matProps[4].scaling;
        for (let item of Node) {
            //console.log(Node[i].x);
            NodeList.push({'nodeName': Node[i].nodeName});
            //Node[i].x = Node[i].x*scaleFactor;
            //Node[i].y = Node[i].y*scaleFactor;
            //Node[i].z = Node[i].z*scaleFactor;
            plotDot(scene, {x: Node[i].x, y: Node[i].y, z: Node[i].z}, 0.1, "#ffffff", Node[i].nodeName, detailText);
            i = i+1;
        };
        for (var j = 0; j < Tri.length; j = j+1) {
            plotTri(scene,Tri[j],'#0000ff',Tri[j].elemName);
        }

        DoAnalysis();
    }

});