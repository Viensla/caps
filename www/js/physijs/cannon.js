/**
 * Copyright (c) 2012 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */(function(){var a=a||{};this.Int32Array||(this.Int32Array=Array,this.Float32Array=Array),a.Broadphase=function(){this.world=null},a.Broadphase.prototype.constructor=a.BroadPhase,a.Broadphase.prototype.collisionPairs=function(a){throw"collisionPairs not implemented for this BroadPhase class!"},a.NaiveBroadphase=function(){this.temp={r:new a.Vec3,normal:new a.Vec3,quat:new a.Quaternion}},a.NaiveBroadphase.prototype=new a.Broadphase,a.NaiveBroadphase.prototype.constructor=a.NaiveBroadphase,a.NaiveBroadphase.prototype.collisionPairs=function(b){var c=[],d=[],e=b.numObjects(),f=b.bodies,g=a.Shape.types,h=g.SPHERE|g.BOX|g.COMPOUND|g.CONVEXHULL,i=g.PLANE,j=a.RigidBody.STATIC|a.RigidBody.KINEMATIC,k=this.temp.r,l=this.temp.normal,m=this.temp.quat;for(var n=0;n<e;n++)for(var o=0;o<n;o++){var p=f[n],q=f[o],r=p.shape.type,s=q.shape.type;if((p.motionstate&j)!==0&&(q.motionstate&j)!==0)continue;if(r&h&&s&h){q.position.vsub(p.position,k);var t=p.shape.boundingSphereRadius()+q.shape.boundingSphereRadius();k.norm2()<t*t&&(c.push(n),d.push(o))}else if(r&h&&s&g.PLANE||s&h&&r&g.PLANE){var u=r===i?n:o,v=r!==i?n:o;f[v].position.vsub(f[u].position,k),f[u].quaternion.vmult(f[u].shape.normal,l);var w=k.dot(l)-f[v].shape.boundingSphereRadius();w<0&&(c.push(n),d.push(o))}}return[c,d]},a.Mat3=function(a){a?this.elements=new Float32Array(a):this.elements=new Float32Array(9)},a.Mat3.prototype.identity=function(){this.elements[0]=1,this.elements[1]=0,this.elements[2]=0,this.elements[3]=0,this.elements[4]=1,this.elements[5]=0,this.elements[6]=0,this.elements[7]=0,this.elements[8]=1},a.Mat3.prototype.vmult=function(b,c){c===undefined&&(c=new a.Vec3);var d=[b.x,b.y,b.z],e=[0,0,0];for(var f=0;f<3;f++)for(var g=0;g<3;g++)e[f]+=this.elements[f+3*g]*d[f];return c.x=e[0],c.y=e[1],c.z=e[2],c},a.Mat3.prototype.smult=function(a){for(var b=0;b<this.elements.length;b++)this.elements[b]*=a},a.Mat3.prototype.mmult=function(b){var c=new a.Mat3;for(var d=0;d<3;d++)for(var e=0;e<3;e++){var f=0;for(var g=0;g<3;g++)f+=this.elements[d+g]*b.elements[g+e*3];c.elements[d+e*3]=f}return c},a.Mat3.prototype.solve=function(b,c){c=c||new a.Vec3;var d=3,e=4,f=new Float32Array(d*e),g,h;for(g=0;g<3;g++)for(h=0;h<3;h++)f[g+e*h]=this.elements[g+3*h];f[3]=b.x,f[7]=b.y,f[11]=b.z;var i=3,j=i,k,l=4,m,n;do{g=j-i;if(f[g+e*g]===0)for(h=g+1;h<j;h++)if(f[g+e*h]!==0){n=[],k=l;do m=l-k,n.push(f[m+e*g]+f[m+e*h]);while(--k);f[g+e*0]=n[0],f[g+e*1]=n[1],f[g+e*2]=n[2];break}if(f[g+e*g]!==0)for(h=g+1;h<j;h++){var o=f[g+e*h]/f[g+e*g];n=[],k=l;do m=l-k,n.push(m<=g?0:f[m+e*h]-f[m+e*g]*o);while(--k);f[h+e*0]=n[0],f[h+e*1]=n[1],f[h+e*2]=n[2]}}while(--i);c.z=f[2*e+3]/f[2*e+2],c.y=(f[1*e+3]-f[1*e+2]*c.z)/f[1*e+1],c.x=(f[0*e+3]-f[0*e+2]*c.z-f[0*e+1]*c.y)/f[0*e+0];if(isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===Infinity||c.y===Infinity||c.z===Infinity)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";return c},a.Mat3.prototype.e=function(a,b,c){if(c===undefined)return this.elements[a+3*b];this.elements[a+3*b]=c},a.Mat3.prototype.copy=function(b){b=b||new a.Mat3;for(var c=0;c<this.elements.length;c++)b.elements[c]=this.elements[c];return b},a.Mat3.prototype.toString=function(){var a="",b=",";for(var c=0;c<9;c++)a+=this.elements[c]+b;return a},a.Vec3=function(a,b,c){this.x=a||0,this.y=b||0,this.z=c||0},a.Vec3.prototype.cross=function(b,c){c=c||new a.Vec3;var d=[this.x,this.y,this.z],e=[b.x,b.y,b.z];return c.x=d[1]*e[2]-d[2]*e[1],c.y=d[2]*e[0]-d[0]*e[2],c.z=d[0]*e[1]-d[1]*e[0],c},a.Vec3.prototype.set=function(a,b,c){return this.x=a,this.y=b,this.z=c,this},a.Vec3.prototype.vadd=function(b,c){if(!c)return new a.Vec3(this.x+b.x,this.y+b.y,this.z+b.z);c.x=b.x+this.x,c.y=b.y+this.y,c.z=b.z+this.z},a.Vec3.prototype.vsub=function(b,c){if(!c)return new a.Vec3(this.x-b.x,this.y-b.y,this.z-b.z);c.x=this.x-b.x,c.y=this.y-b.y,c.z=this.z-b.z},a.Vec3.prototype.crossmat=function(){return new a.Mat3([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},a.Vec3.prototype.normalize=function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return a>0?(this.x/=a,this.y/=a,this.z/=a):(this.x=0,this.y=0,this.z=0),a},a.Vec3.prototype.unit=function(b){b=b||new a.Vec3;var c=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return c>0?(c=1/c,b.x=this.x*c,b.y=this.y*c,b.z=this.z*c):(b.x=0,b.y=0,b.z=0),b},a.Vec3.prototype.norm=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},a.Vec3.prototype.norm2=function(){return this.dot(this)},a.Vec3.prototype.mult=function(b,c){return c||(c=new a.Vec3),c.x=b*this.x,c.y=b*this.y,c.z=b*this.z,c},a.Vec3.prototype.dot=function(a){return this.x*a.x+this.y*a.y+this.z*a.z},a.Vec3.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},a.Vec3.prototype.negate=function(b){return b=b||new a.Vec3,b.x=-this.x,b.y=-this.y,b.z=-this.z,b},a.Vec3.prototype.tangents=function(b,c){var d=this.norm();if(d>0){var e=new a.Vec3(this.x/d,this.y/d,this.z/d);if(e.x<.9){var f=Math.random();e.cross((new a.Vec3(f,1e-7,0)).unit(),b)}else e.cross((new a.Vec3(1e-7,f,0)).unit(),b);e.cross(b,c)}else b.set(1,0,0).normalize(),c.set(0,1,0).normalize()},a.Vec3.prototype.toString=function(){return this.x+","+this.y+","+this.z},a.Vec3.prototype.copy=function(b){return b=b||new a.Vec3,b.x=this.x,b.y=this.y,b.z=this.z,b},a.Vec3.prototype.lerp=function(a,b,c){c.x=this.x+(a.x-this.x)*b,c.y=this.y+(a.y-this.y)*b,c.z=this.z+(a.z-this.z)*b},a.Vec3.prototype.almostEquals=function(a,b){return b===undefined&&(b=1e-6),Math.abs(this.x-a.x)>b||Math.abs(this.y-a.y)>b||Math.abs(this.z-a.z)>b?!1:!0},a.Vec3.prototype.almostZero=function(a){return a===undefined&&(a=1e-6),Math.abs(this.x)>a||Math.abs(this.y)>a||Math.abs(this.z)>a?!1:!0},a.Quaternion=function(a,b,c,d){this.x=a!=undefined?a:0,this.y=b!=undefined?b:0,this.z=c!=undefined?c:0,this.w=d!=undefined?d:1},a.Quaternion.prototype.set=function(a,b,c,d){this.x=a,this.y=b,this.z=c,this.w=d},a.Quaternion.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},a.Quaternion.prototype.setFromAxisAngle=function(a,b){var c=Math.sin(b*.5);this.x=a.x*c,this.y=a.y*c,this.z=a.z*c,this.w=Math.cos(b*.5)},a.Quaternion.prototype.setFromVectors=function(a,b){var c=a.cross(b);this.x=c.x,this.y=c.y,this.z=c.z,this.w=Math.sqrt(Math.pow(a.norm(),2)*Math.pow(b.norm(),2))+a.dot(b),this.normalize()},a.Quaternion.prototype.mult=function(b,c){c==undefined&&(c=new a.Quaternion);var d=new a.Vec3(this.x,this.y,this.z),e=new a.Vec3(b.x,b.y,b.z);return c.w=this.w*b.w-d.dot(e),vaxvb=d.cross(e),c.x=this.w*e.x+b.w*d.x+vaxvb.x,c.y=this.w*e.y+b.w*d.y+vaxvb.y,c.z=this.w*e.z+b.w*d.z+vaxvb.z,c},a.Quaternion.prototype.inverse=function(b){b==undefined&&(b=new a.Quaternion),this.conjugate(b);var c=1/(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return b.x*=c,b.y*=c,b.z*=c,b.w*=c,b},a.Quaternion.prototype.conjugate=function(b){return b==undefined&&(b=new a.Quaternion),b.x=-this.x,b.y=-this.y,b.z=-this.z,b.w=this.w,b},a.Quaternion.prototype.normalize=function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);a===0?(this.x=0,this.y=0,this.z=0,this.w=0):(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a)},a.Quaternion.prototype.normalizeFast=function(){var a=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;a===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=a,this.y*=a,this.z*=a,this.w*=a)},a.Quaternion.prototype.vmult=function(b,c){c=c||new a.Vec3;if(this.w==0)c.x=b.x,c.y=b.y,c.z=b.z;else{var d=b.x,e=b.y,f=b.z,g=this.x,h=this.y,i=this.z,j=this.w,k=j*d+h*f-i*e,l=j*e+i*d-g*f,m=j*f+g*e-h*d,n=-g*d-h*e-i*f;c.x=k*j+n*-g+l*-i-m*-h,c.y=l*j+n*-h+m*-g-k*-i,c.z=m*j+n*-i+k*-h-l*-g}return c},a.Quaternion.prototype.copy=function(a){a.x=this.x,a.y=this.y,a.z=this.z,a.w=this.w},a.Quaternion.prototype.toEuler=function(a,b){b=b||"YZX";var c,d,e,f=this.x,g=this.y,h=this.z,i=this.w;switch(b){case"YZX":var j=f*g+h*i;j>.499&&(c=2*Math.atan2(f,i),d=Math.PI/2,e=0),j<-0.499&&(c=-2*Math.atan2(f,i),d=-Math.PI/2,e=0);if(isNaN(c)){var k=f*f,l=g*g,m=h*h;c=Math.atan2(2*g*i-2*f*h,1-2*l-2*m),d=Math.asin(2*j),e=Math.atan2(2*f*i-2*g*h,1-2*k-2*m)}break;default:throw new Error("Euler order "+b+" not supported yet.")}a.y=c,a.z=d,a.x=e},a.Shape=function(){this.type=0,this.aabbmin=new a.Vec3,this.aabbmax=new a.Vec3},a.Shape.prototype.constructor=a.Shape,a.Shape.prototype.boundingSphereRadius=function(){throw"boundingSphereRadius() not implemented for shape type "+this.type},a.Shape.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},a.Shape.prototype.calculateLocalInertia=function(a,b){throw"calculateLocalInertia() not implemented for shape type "+this.type},a.Shape.prototype.calculateTransformedInertia=function(b,c,d){d==undefined&&(d=new a.Vec3),c.normalize();var e=this.calculateLocalInertia(b),f=c.vmult(e);return d.x=Math.abs(f.x),d.y=Math.abs(f.y),d.z=Math.abs(f.z),d},a.Shape.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXHULL:16},a.RigidBody=function(b,c,d){this.position=new a.Vec3,this.initPosition=new a.Vec3,this.velocity=new a.Vec3,this.initVelocity=new a.Vec3,this.force=new a.Vec3,this.tau=new a.Vec3,this.quaternion=new a.Quaternion,this.initQuaternion=new a.Quaternion,this.angularVelocity=new a.Vec3,this.initAngularVelocity=new a.Vec3,this.mass=b,this.invMass=b>0?1/b:0,this.shape=c,this.inertia=new a.Vec3,c.calculateLocalInertia(b,this.inertia),this.invInertia=new a.Vec3(this.inertia.x>0?1/this.inertia.x:0,this.inertia.y>0?1/this.inertia.y:0,this.inertia.z>0?1/this.inertia.z:0),this.material=d,this.linearDamping=.01,this.angularDamping=.01,this.motionstate=b<=0?a.RigidBody.STATIC:a.RigidBody.DYNAMIC,this.world=null,this.preStep=null,this.postStep=null},a.RigidBody.DYNAMIC=1,a.RigidBody.STATIC=2,a.RigidBody.KINEMATIC=4,a.Sphere=function(b){a.Shape.call(this),this.radius=b!=undefined?Number(b):1,this.type=a.Shape.types.SPHERE},a.Sphere.prototype=new a.Shape,a.Sphere.prototype.constructor=a.Sphere,a.Sphere.prototype.calculateLocalInertia=function(b,c){c=c||new a.Vec3;var d=2*b*this.radius*this.radius/5;return c.x=d,c.y=d,c.z=d,c},a.Sphere.prototype.volume=function(){return 4*Math.PI*this.radius/3},a.Sphere.prototype.boundingSphereRadius=function(){return this.radius},a.Box=function(b){a.Shape.call(this),this.halfExtents=b,this.type=a.Shape.types.BOX,this.convexHullRepresentation=null,this.updateConvexHullRepresentation()},a.Box.prototype=new a.Shape,a.Box.prototype.constructor=a.Box,a.Box.prototype.updateConvexHullRepresentation=function(){var b=new a.ConvexHull,c=this.halfExtents.x,d=this.halfExtents.y,e=this.halfExtents.z,f=a.Vec3;b.addPoints([new f(-c,-d,-e),new f(c,-d,-e),new f(c,d,-e),new f(-c,d,-e),new f(-c,-d,e),new f(c,-d,e),new f(c,d,e),new f(-c,d,e)],[[0,1,2,3],[4,5,6,7],[0,1,4,5],[2,3,6,7],[0,3,4,7],[1,2,5,6]],[new f(0,0,-1),new f(0,0,1),new f(0,-1,0),new f(0,1,0),new f(-1,0,0),new f(1,0,0)]),this.convexHullRepresentation=b},a.Box.prototype.calculateLocalInertia=function(b,c){return c=c||new a.Vec3,c.x=1/12*b*(2*this.halfExtents.y*2*this.halfExtents.y+2*this.halfExtents.z*2*this.halfExtents.z),c.y=1/12*b*(2*this.halfExtents.x*2*this.halfExtents.x+2*this.halfExtents.z*2*this.halfExtents.z),c.z=1/12*b*(2*this.halfExtents.y*2*this.halfExtents.y+2*this.halfExtents.x*2*this.halfExtents.x),c},a.Box.prototype.getCorners=function(b){var c=[],d=this.halfExtents;c.push(new a.Vec3(d.x,d.y,d.z)),c.push(new a.Vec3(-d.x,d.y,d.z)),c.push(new a.Vec3(-d.x,-d.y,d.z)),c.push(new a.Vec3(-d.x,-d.y,-d.z)),c.push(new a.Vec3(d.x,-d.y,-d.z)),c.push(new a.Vec3(d.x,d.y,-d.z)),c.push(new a.Vec3(-d.x,d.y,-d.z)),c.push(new a.Vec3(d.x,-d.y,d.z));for(var e=0;b!=undefined&&e<c.length;e++)b.vmult(c[e],c[e]);return c},a.Box.prototype.getSideNormals=function(b,c){var d=[],e=this.halfExtents;d.push(new a.Vec3(e.x,0,0)),d.push(new a.Vec3(0,e.y,0)),d.push(new a.Vec3(0,0,e.z)),b!=undefined&&b&&(d.push(new a.Vec3(-e.x,0,0)),d.push(new a.Vec3(0,-e.y,0)),d.push(new a.Vec3(0,0,-e.z)));for(var f=0;c!=undefined&&f<d.length;f++)c.vmult(d[f],d[f]);return d},a.Box.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},a.Box.prototype.boundingSphereRadius=function(){return this.halfExtents.norm()},a.Plane=function(b){a.Shape.call(this),b.normalize(),this.normal=b,this.type=a.Shape.types.PLANE},a.Plane.prototype=new a.Shape,a.Plane.prototype.constructor=a.Plane,a.Plane.prototype.calculateLocalInertia=function(b,c){return c=c||new a.Vec3,c},a.Plane.prototype.volume=function(){return Infinity},a.Compound=function(){a.Shape.call(this),this.type=a.Shape.types.COMPOUND,this.childShapes=[],this.childOffsets=[],this.childOrientations=[]},a.Compound.prototype=new a.Shape,a.Compound.prototype.constructor=a.Compound,a.Compound.prototype.addChild=function(b,c,d){c=c||new a.Vec3,d=d||new a.Quaternion,this.childShapes.push(b),this.childOffsets.push(c),this.childOrientations.push(d)},a.Compound.prototype.volume=function(){var a=0;for(var b=0;b<this.childShapes.length;b++)a+=this.childShapes[b].volume();return a},a.Compound.prototype.calculateLocalInertia=function(b,c){c=c||new a.Vec3;var d=this.volume();for(var e=0;e<this.childShapes.length;e++){var f=this.childShapes[e],g=this.childOffsets[e],h=this.childOrientations[e],i=f.volume()/d*b,j=f.calculateTransformedInertia(i,h);c.vadd(j,c);var k=new a.Vec3(i*g.x*g.x,i*g.y*g.y,i*g.z*g.z);c.vadd(k,c)}return c},a.Compound.prototype.boundingSphereRadius=function(){var a=0;for(var b=0;b<this.childShapes.length;b++){var c=this.childOffsets[b].norm()+this.childShapes[b].boundingSphereRadius();a<c&&(a=c)}return a},a.ConvexHull=function(){function c(b,c,d,e,f){var g=b.vertices.length,h=null,i=null,j=b.vertices,k=new a.Vec3;for(var l=0;l<g;l++){j[l].copy(k),e.vmult(k,k),k.vadd(d,k);var m=k.dot(c);if(h===null||m>h)h=m;if(i===null||m<i)i=m}if(i>h){var n=i;i=h,h=n}f[0]=h,f[1]=i}function d(c,d){var e=b.vertices[c[0]],f=b.vertices[c[1]],h=b.vertices[c[2]],i=new a.Vec3;g(e,f,h,i);var j=i.dot(e);return i.dot(d)>=j}function e(a,c){var d=b.faces[a],e=b.vertices[d[0]],f=b.vertices[d[1]],h=b.vertices[d[2]];return g(e,f,h,c)}function f(a,c){var d=b.faces[a],e=b.faceNormals[a],f=b.vertices[d[0]],g=-e.dot(f);return g}function g(b,c,d,e){var f=new a.Vec3,g=new a.Vec3;c.vsub(b,g),d.vsub(c,f),f.cross(g,e),e.isZero()||e.normalize()}function h(a){var c=b.faces[a],d="";for(var e=0;e<c.length;e++)d+=" ("+b.vertices[c[e]]+")";return d}function i(a,b){return a[0]===b[1]&&a[1]===b[0]}function j(){return(Math.random()-.5)*2*1e-6}var b=this;a.Shape.call(this),this.type=a.Shape.types.CONVEXHULL,this.vertices=[],this.faces=[],this.faceNormals=[],this.uniqueEdges=[],this.addPoints=function(b,c,d){for(pi in b){var e=b[pi];if(!(e instanceof a.Vec3))throw"Argument 1 must be instance of CANNON.Vec3";this.vertices.push(e)}this.faces=c,this.faceNormals=d;for(var f=0;f<c.length;f++){var g=c[f].length,h=g;for(var i=0;i<h;i++){var j=(i+1)%g,k=new a.Vec3;this.vertices[c[f][i]].vsub(this.vertices[c[f][j]],k),k.normalize();var l=!1;for(var e=0;e<this.uniqueEdges.length;e++)if(this.uniqueEdges[e].almostEquals(k)||this.uniqueEdges[e].almostEquals(k)){l=!0;break}l||this.uniqueEdges.push(k);if(k)k.face1=f;else{var m;m.m_face0=f,edges.insert(vp,m)}}}return this.computeAABB(),!0},this.testSepAxis=function(a,b,d,e,f,g){var h=[],i=[],j=this;c(j,a,d,e,h),c(b,a,f,g,i);var k=h[0],l=h[1],m=i[0],n=i[1];if(k<n||m<l)return!1;var o=k-n,p=m-l;return depth=o<p?o:p,depth},this.findSeparatingAxis=function(b,c,d,e,f,g){var h=Infinity,i=this,j=0,k=i.faces.length,l=new a.Vec3;for(var m=0;m<k;m++){i.faceNormals[m].copy(l),d.vmult(l,l);var n=i.testSepAxis(l,b,c,d,e,f);if(n===!1)return!1;n<h&&(h=n,l.copy(g))}var o=new a.Vec3,p=b.faces.length;for(var m=0;m<p;m++){b.faceNormals[m].copy(o),f.vmult(o,o),j++;var n=i.testSepAxis(o,b,c,d,e,f);if(n===!1)return!1;n<h&&(h=n,o.copy(g))}var q,r,s,t,u=0,v=new a.Vec3,w=new a.Vec3,x=new a.Vec3;for(var y=0;y<i.uniqueEdges.length;y++){i.uniqueEdges[y].copy(v),d.vmult(v,v);for(var z=0;z<b.uniqueEdges.length;z++){b.uniqueEdges[z].copy(w),f.vmult(w,w),v.cross(w,x),u++;if(!x.almostZero()){x.normalize();var A=i.testSepAxis(x,b,c,d,e,f);if(A===!1)return!1;A<h&&(h=A,x.copy(g))}}}var B=new a.Vec3;return e.vsub(c,B),B.dot(g)>0&&g.negate(g),!0},this.clipAgainstHull=function(b,c,d,e,f,g,h,i,j){if(!(b instanceof a.Vec3))throw new Error("posA must be Vec3");if(!(c instanceof a.Quaternion))throw new Error("quatA must be Quaternion");var k=this,l=i,m=-1,n=-Infinity,o=new a.Vec3;for(var p=0;p<d.faces.length;p++){d.faceNormals[p].copy(o),f.vmult(o,o),e.vadd(o,o);var q=o.dot(g);q>n&&(n=q,m=p)}var r=[];polyB=d.faces[m];var s=polyB.length;for(var t=0;t<s;t++){var u=d.vertices[polyB[t]],v=new a.Vec3;u.copy(v),f.vmult(v,v),e.vadd(v,v),r.push(v)}m>=0&&this.clipFaceAgainstHull(g,b,c,r,h,i,j)},this.clipFaceAgainstHull=function(b,c,d,e,g,h,i){if(!(b instanceof a.Vec3))throw new Error("sep normal must be vector");if(!(e instanceof Array))throw new Error("world verts must be array");g=Number(g),h=Number(h);var j=this,k=[],l=e,m=k,n=-1,o=Infinity,p=new a.Vec3;for(var q=0;q<j.faces.length;q++){j.faceNormals[q].copy(p),d.vmult(p,p),c.vadd(p,p);var r=p.dot(b);r<o&&(o=r,n=q)}if(n<0){console.log("--- did not find any closest face... ---");return}var s=j.faces[n];s.connectedFaces=[];for(var t=0;t<j.faces.length;t++)for(var u=0;u<j.faces[t].length;u++)s.indexOf(j.faces[t][u])!==-1&&t!==n&&s.connectedFaces.indexOf(t)===-1&&s.connectedFaces.push(t);var v=l.length,w=s.length,x=new a.Vec3,y=new a.Vec3,z=new a.Vec3,A=new a.Vec3,B=[];for(var C=0;C<w;C++){var D=j.vertices[s[C]],E=j.vertices[s[(C+1)%w]];D.vsub(E,x),x.copy(y),d.vmult(y,y),c.vadd(y,y),this.faceNormals[n].copy(z),d.vmult(z,z),c.vadd(z,z),y.cross(z,A),A.negate(A);var F=new a.Vec3;D.copy(F),d.vmult(F,F),c.vadd(F,F);var G=-F.dot(A),H=s.connectedFaces[C],I=new a.Vec3;this.faceNormals[H].copy(I);var J=f(H),K=new a.Vec3;I.copy(K),d.vmult(K,K);var L=J-K.dot(c);this.clipFaceAgainstPlane(l,m,K,L);while(l.length)l.shift();while(m.length)l.push(m.shift())}var I=new a.Vec3;this.faceNormals[n].copy(I);var J=f(n),K=new a.Vec3;I.copy(K),d.vmult(K,K);var L=J-K.dot(c);for(var t=0;t<l.length;t++){var M=K.dot(l[t])+L;M<=g&&(console.log("clamped: depth="+M+" to minDist="+(g+"")),M=g);if(M<=h){var N=l[t],O={point:N,normal:K,depth:M};i.push(O)}}},this.clipFaceAgainstPlane=function(b,c,d,e){if(d instanceof a.Vec3){if(b instanceof Array){if(c instanceof Array){var f,g,h=b.length;if(h<2)return c;var i=b[b.length-1],j=b[0];f=d.dot(i)+e;for(var k=0;k<h;k++){j=b[k],g=d.dot(j)+e;if(f<0)if(g<0){var l=new a.Vec3;j.copy(l),c.push(l)}else{var l=new a.Vec3;i.lerp(j,f/(f-g),l),c.push(l)}else if(g<0){var l=new a.Vec3;i.lerp(j,f/(f-g),l),c.push(l),c.push(j)}i=j,f=g}return c}throw new Error("outvertices must be Array, "+c+" given")}throw new Error("invertices must be Array, "+b+" given")}throw new Error("planeNormal must be Vec3, "+d+" given")};var b=this;this.calculateLocalInertia=function(a,b){var c=this.aabbmax.x-this.aabbmin.x,d=this.aabbmax.y-this.aabbmin.y,e=this.aabbmax.z-this.aabbmin.z;b.x=1/12*a*(2*d*2*d+2*e*2*e),b.y=1/12*a*(2*c*2*c+2*e*2*e),b.z=1/12*a*(2*d*2*d+2*c*2*c)},this.computeAABB=function(){var a=this.vertices.length,b=this.aabbmin,c=this.aabbmax,d=this.vertices;b.set(Infinity,Infinity,Infinity),c.set(-Infinity,-Infinity,-Infinity);for(var e=0;e<a;e++){var f=d[e];f.x<b.x?b.x=f.x:f.x>c.x&&(c.x=f.x),f.y<b.y?b.y=f.y:f.y>c.y&&(c.y=f.y),f.z<b.z?b.z=f.z:f.z>c.z&&(c.z=f.z)}},this.boundingSphereRadius=function(){var a=0;for(var b=0;b<this.vertices.length;b++){var c=this.vertices[b].norm2();c>a&&(a=c)}return Math.sqrt(a)}},a.ConvexHull.prototype=new a.Shape,a.ConvexHull.prototype.constructor=a.ConvexHull,a.Solver=function(a,b,c,d,e,f,g){this.iterations=f||10,this.h=g||1/60,this.a=a,this.b=b,this.eps=c,this.k=d,this.d=e,this.reset(0),this.debug=!1,this.debug&&console.log("a:",a,"b",b,"eps",c,"k",d,"d",e)},a.Solver.prototype.reset=function(a){this.G=[],this.MinvTrace=[],this.Fext=[],this.q=[],this.qdot=[],this.n=0,this.upper=[],this.lower=[],this.hasupper=[],this.haslower=[],this.i=[],this.j=[],this.vxlambda=new Float32Array(a),this.vylambda=new Float32Array(a),this.vzlambda=new Float32Array(a),this.wxlambda=new Float32Array(a),this.wylambda=new Float32Array(a),this.wzlambda=new Float32Array(a)},a.Solver.prototype.addConstraint=function(a,b,c,d,e,f,g,h,i){this.debug&&(console.log("Adding constraint ",this.n),console.log("G:",a),console.log("q:",c),console.log("qdot:",d),console.log("Fext:",e),console.log("lower:",f),console.log("upper:",g));for(var j=0;j<12;j++)this.q.push(c[j]),this.qdot.push(d[j]),this.MinvTrace.push(b[j]),this.G.push(a[j]),this.Fext.push(e[j]);return this.upper.push(g),this.hasupper.push(!isNaN(g)),this.lower.push(f),this.haslower.push(!isNaN(f)),this.i.push(h),this.j.push(i),this.n+=1,this.n-1},a.Solver.prototype.addNonPenetrationConstraint=function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=f.cross(e),u=m.vsub(l),v=d.vadd(g).vsub(c.vadd(f)),w=v.dot(e);w<0&&(this.debug&&(console.log("i:",a,"j",b,"xi",c.toString(),"xj",d.toString()),console.log("ni",e.toString(),"ri",f.toString(),"rj",g.toString()),console.log("iMi",h.toString(),"iMj",i.toString(),"iIi",j.toString(),"iIj",k.toString(),"vi",l.toString(),"vj",m.toString(),"wi",n.toString(),"wj",o.toString(),"fi",p.toString(),"fj",q.toString(),"taui",r.toString(),"tauj",s.toString())),this.addConstraint([-e.x,-e.y,-e.z,-t.x,-t.y,-t.z,e.x,e.y,e.z,t.x,t.y,t.z],[h.x,h.y,h.z,j.z,j.y,j.z,i.x,i.y,i.z,k.z,k.y,k.z],[-v.x,-v.y,-v.z,0,0,0,v.x,v.y,v.z,0,0,0],[-u.x,-u.y,-u.z,0,0,0,u.x,u.y,u.z,0,0,0],[p.x,p.y,p.z,r.x,r.y,r.z,q.x,q.y,q.z,s.x,s.y,s.z],0,"inf",a,b))},a.Solver.prototype.solve=function(){this.i=new Int16Array(this.i);var a=this.n,b=new Float32Array(a),c=new Float32Array(a),d=new Float32Array(12*a),e=new Float32Array(a),f=new Float32Array(a),g=new Int16Array(a),h=new Float32Array(this.G);for(var i=0;i<this.iterations;i++)for(var j=0;j<a;j++){var k=this.i[j],l=this.j[j],m=12*j;if(!g[j]){var n=0,o=0,p=0,q=0;for(var r=0;r<12;r++){var s=m+r;n+=h[s]*this.MinvTrace[s]*h[s],o+=h[s]*this.q[s],p+=h[s]*this.qdot[s],q+=h[s]*this.MinvTrace[s]*this.Fext[s]}f[j]=1/(n+this.eps),e[j]=-this.a*o-this.b*p-this.h*q,g[j]=1,this.debug&&(console.log("G_Minv_Gt["+j+"]:",n),console.log("Gq["+j+"]:",o),console.log("GW["+j+"]:",p),console.log("GMinvf["+j+"]:",q))}var t=0;t+=h[0+m]*this.vxlambda[k],t+=h[1+m]*this.vylambda[k],t+=h[2+m]*this.vzlambda[k],t+=h[3+m]*this.wxlambda[k],t+=h[4+m]*this.wylambda[k],t+=h[5+m]*this.wzlambda[k],t+=h[6+m]*this.vxlambda[l],t+=h[7+m]*this.vylambda[l],t+=h[8+m]*this.vzlambda[l],t+=h[9+m]*this.wxlambda[l],t+=h[10+m]*this.wylambda[l],t+=h[11+m]*this.wzlambda[l],c[j]=f[j]*(e[j]-t-this.eps*b[j]),this.debug&&console.log("dlambda["+j+"]=",c[j]),b[j]=b[j]+c[j],this.haslower[j]&&b[j]<this.lower[j]&&(this.debug&&console.log("hit lower bound for constraint "+j+", truncating "+b[j]+" to the bound "+this.lower[j]),b[j]=this.lower[j],c[j]=this.lower[j]-b[j]),this.hasupper&&b[j]>this.upper[j]&&(this.debug&&console.log("hit upper bound for constraint "+j+", truncating "+b[j]+" to the bound "+this.upper[j]),b[j]=this.upper[j],c[j]=this.upper[j]-b[j]),this.vxlambda[k]+=c[j]*this.MinvTrace[m+0]*h[m+0],this.vylambda[k]+=c[j]*this.MinvTrace[m+1]*h[m+1],this.vzlambda[k]+=c[j]*this.MinvTrace[m+2]*h[m+2],this.wxlambda[k]+=c[j]*this.MinvTrace[m+3]*h[m+3],this.wylambda[k]+=c[j]*this.MinvTrace[m+4]*h[m+4],this.wzlambda[k]+=c[j]*this.MinvTrace[m+5]*h[m+5],this.vxlambda[l]+=c[j]*this.MinvTrace[m+6]*h[m+6],this.vylambda[l]+=c[j]*this.MinvTrace[m+7]*h[m+7],this.vzlambda[l]+=c[j]*this.MinvTrace[m+8]*h[m+8],this.wxlambda[l]+=c[j]*this.MinvTrace[m+9]*h[m+9],this.wylambda[l]+=c[j]*this.MinvTrace[m+10]*h[m+10],this.wzlambda[l]+=c[j]*this.MinvTrace[m+11]*h[m+11]}if(this.debug)for(var r=0;r<this.vxlambda.length;r++)console.log("dv["+r+"]=",this.vxlambda[r],this.vylambda[r],this.vzlambda[r],this.wxlambda[r],this.wylambda[r],this.wzlambda[r])},a.Material=function(a){this.name=a,this.id=-1},a.ContactMaterial=function(a,b,c,d){this.id=-1,this.materials=[a,b],this.friction=c!=undefined?Number(c):.3,this.restitution=d!=undefined?Number(d):.3},a.World=function(){this.time=0,this.stepnumber=0,this.spook_k=500,this.spook_d=3,this.default_dt=1/60,this.last_dt=this.default_dt,this.nextId=0,this.gravity=new a.Vec3,this.broadphase=null,this.bodies=[];var b=this;this.spook_a=function(a){return 4/(a*(1+4*b.spook_d))},this.spook_b=4*this.spook_d/(1+4*this.spook_d),this.spook_eps=function(a){return 4/(a*a*b.spook_k*(1+4*b.spook_d))},this.solver=new a.Solver(this.spook_a(1/60),this.spook_b,this.spook_eps(1/60)*.1,this.spook_k,this.spook_d,5,1/60),this.contactgen=new a.ContactGenerator,this.materials=[],this.contactmaterials=[],this.mats2cmat=[],this.temp={gvec:new a.Vec3,vi:new a.Vec3,vj:new a.Vec3,wi:new a.Vec3,wj:new a.Vec3,t1:new a.Vec3,t2:new a.Vec3,rixn:new a.Vec3,rjxn:new a.Vec3,step_q:new a.Quaternion,step_w:new a.Quaternion,step_wq:new a.Quaternion}},a.World.prototype.getContactMaterial=function(b,c){if(b instanceof a.Material&&c instanceof a.Material){var d=b.id,e=c.id;if(d<e){var f=d;d=e,e=f}return this.contactmaterials[this.mats2cmat[d+e*this.materials.length]]}},a.World.prototype._addImpulse=function(b,c,d,e,f,g,h,i){var j=d.crossmat(),k=e.crossmat(),l=this.inertiax[b]>0?1/this.inertiax[b]:0,m=new a.Mat3([l,0,0,0,l,0,0,0,l]);l=this.inertiax[c]>0?1/this.inertiax[c]:0;var n=new a.Mat3([l,0,0,0,l,0,0,0,l]),o=this.invm[b]+this.invm[c],p=new a.Mat3([o,0,0,0,o,0,0,0,o]),q=j.mmult(m.mmult(j)),r=k.mmult(n.mmult(k)),s=g.mult(-h*f.dot(g)),t=p.solve(s.vsub(f)),i=0;if(i>0){var u=g.mult(t.dot(g)),v=t.vsub(u);if(v.norm()>u.mult(i).norm()){var w=f.vsub(g.mult(f.dot(g))),x=w.mult(1/(w.norm()+1e-4)),y=-(1+h)*f.dot(g)/g.dot(p.vmult(g.vsub(x.mult(i))));t=g.mult(y).vsub(x.mult(i*y))}}var z=this.invm[b],A=this.invm[c];this.vx[b]+=t.x*z-(this.vx[c]-f.x),this.vy[b]+=t.y*z-(this.vy[c]-f.y),this.vz[b]+=t.z*z-(this.vz[c]-f.z),this.vx[c]-=t.x*A+(this.vx[b]+f.x),this.vy[c]-=t.y*A+(this.vy[b]+f.y),this.vz[c]-=t.z*A+(this.vz[b]+f.z);var B=d.cross(t),C=B.mult(1/this.inertiax[b])},a.World.prototype.numObjects=function(){return this.bodies.length},a.World.prototype.clearCollisionState=function(a){var b=this.numObjects(),c=a.id;for(var d=0;d<b;d++){var e=d;c>e?this.collision_matrix[e+c*b]=0:this.collision_matrix[c+e*b]=0}},a.World.prototype.add=function(b){if(b instanceof a.RigidBody){var c=this.numObjects();this.bodies.push(b),b.id=this.id(),b.world=this,b.position.copy(b.initPosition),b.velocity.copy(b.initVelocity),b.angularVelocity.copy(b.initAngularVelocity),b.quaternion.copy(b.initQuaternion),this.collision_matrix=new Int16Array((c+1)*(c+1))}},a.World.prototype.id=function(){return this.nextId++},a.World.prototype.remove=function(b){if(b instanceof a.RigidBody){b.world=null;var c=this.numObjects(),d=this.bodies;for(var e in d)d[e].id==b.id&&d.splice(e,1);this.collision_matrix=new Int16Array((c-1)*(c-1))}},a.World.prototype.addMaterial=function(a){if(a.id==-1){this.materials.push(a),a.id=this.materials.length-1;var b=new Int16Array(this.materials.length*this.materials.length);for(var c=0;c<b.length;c++)b[c]=-1;for(var c=0;c<this.materials.length-1;c++)for(var d=0;d<this.materials.length-1;d++)b[c+this.materials.length*d]=this.mats2cmat[c+(this.materials.length-1)*d];this.mats2cmat=b}},a.World.prototype.addContactMaterial=function(a){this.addMaterial(a.materials[0]),this.addMaterial(a.materials[1]),a.materials[0].id>a.materials[1].id?(i=a.materials[0].id,j=a.materials[1].id):(j=a.materials[0].id,i=a.materials[1].id),this.contactmaterials.push(a),a.id=this.contactmaterials.length-1,this.mats2cmat[i+this.materials.length*j]=a.id},a.World.prototype.step=function(b){function r(a,b,c,e){if(c==0&&a<b||c==-1&&a>b){var f=b;b=a,a=f}if(e===undefined)return d.collision_matrix[a+b*d.numObjects()];d.collision_matrix[a+b*d.numObjects()]=parseInt(e)}var c=this,d=this,e=this.numObjects(),f=this.bodies;b==undefined&&(this.last_dt?b=this.last_dt:b=this.default_dt);for(var g in f){var h=f[g];if(h.motionstate&a.RigidBody.DYNAMIC){var i=f[g].force,j=f[g].mass;i.x+=c.gravity.x*j,i.y+=c.gravity.y*j,i.z+=c.gravity.z*j}}var k=this.broadphase.collisionPairs(this),l=k[0],m=k[1],n=a.Shape.types.SPHERE,o=a.Shape.types.PLANE,p=a.Shape.types.BOX,q=a.Shape.types.COMPOUND;for(var g in f)for(var s=0;s<g;s++)r(g,s,-1,r(g,s,0)),r(g,s,0,0);this.solver.reset(e);var t=this.contacts;this.contacts=[],this.contactgen.getContacts(l,m,this,this.contacts,t);var u=this.temp;for(var v=0;v<this.contacts.length;v++){var w=this.contacts[v],h=w.bi,x=w.bj,g=h.id,s=x.id,y=r(g,s,-1),z=.3,A=.2,B=this.getContactMaterial(h.material,x.material);B&&(z=B.friction,A=B.restitution);var C=u.gvec;C.set(x.position.x+w.rj.x-h.position.x-w.ri.x,x.position.y+w.rj.y-h.position.y-w.ri.y,x.position.z+w.rj.z-h.position.z-w.ri.z);var D=C.dot(w.ni);if(D<0){var E=h.velocity,F=h.angularVelocity,G=x.velocity,H=x.angularVelocity,I=w.ni,J=[u.t1,u.t2];I.tangents(J[0],J[1]);var K=E.vadd(F.cross(w.ri)),L=G.vadd(H.cross(w.rj)),M=L.vsub(K),N=H.cross(w.rj).vsub(F.cross(w.ri)),O=G.vsub(E),P=w.rj.cross(H).vsub(w.ri.cross(F));O.vsub(P,O);var Q=h.invMass,R=x.invMass,S=h.invInertia.x,T=h.invInertia.y,U=h.invInertia.z,V=x.invInertia.x,W=x.invInertia.y,X=x.invInertia.z,Y=u.rixn,Z=u.rjxn;w.ri.cross(I,Y),w.rj.cross(I,Z);var $=I.mult(M.dot(I)*.5),_=Y.unit().mult(N.dot(Y.unit())),ab=Z.unit().mult(-N.dot(Z.unit())),bb=w.ni.mult(D);this.solver.addConstraint([-I.x,-I.y,-I.z,-Y.x,-Y.y,-Y.z,I.x,I.y,I.z,Z.x,Z.y,Z.z],[Q,Q,Q,S,T,U,R,R,R,V,W,X],[-bb.x,-bb.y,-bb.z,0,0,0,bb.x,bb.y,bb.z,0,0,0],[-$.x,-$.y,-$.z,0,0,0,$.x,$.y,$.z,0,0,0],[h.force.x,h.force.y,h.force.z,h.tau.x,h.tau.y,h.tau.z,-x.force.x,-x.force.y,-x.force.z,-x.tau.x,-x.tau.y,-x.tau.z],0,"inf",g,s);if(z>0){var D=d.gravity.norm();for(var cb=0;cb<J.length;cb++){var db=J[cb],eb=w.ri.cross(db),fb=w.rj.cross(db),gb=db.mult(M.dot(db)),hb=eb.unit().mult(M.dot(eb.unit())),ib=fb.unit().mult(-M.dot(fb.unit()));this.solver.addConstraint([-db.x,-db.y,-db.z,-eb.x,-eb.y,-eb.z,db.x,db.y,db.z,fb.x,fb.y,fb.z],[Q,Q,Q,S,T,U,R,R,R,V,W,X],[0,0,0,0,0,0,0,0,0,0,0,0],[-gb.x,-gb.y,-gb.z,0,0,0,gb.x,gb.y,gb.z,0,0,0],[h.force.x,h.force.y,h.force.z,h.tau.x,h.tau.y,h.tau.z,x.force.x,x.force.y,x.force.z,x.tau.x,x.tau.y,x.tau.z],-z*100*(h.mass+x.mass),z*100*(h.mass+x.mass),g,s)}}}}var h;if(this.solver.n){this.solver.solve();for(var g in f){h=f[g];if(h.motionstate&a.RigidBody.DYNAMIC){var jb=f[g];jb.velocity.x+=this.solver.vxlambda[g],jb.velocity.y+=this.solver.vylambda[g],jb.velocity.z+=this.solver.vzlambda[g],jb.angularVelocity.x+=this.solver.wxlambda[g],jb.angularVelocity.y+=this.solver.wylambda[g],jb.angularVelocity.z+=this.solver.wzlambda[g]}}}for(var g in f){h=f[g];if(h.motionstate&a.RigidBody.DYNAMIC){var kb=1-h.linearDamping,lb=1-h.angularDamping;h.velocity.mult(kb,h.velocity),h.angularVelocity.mult(lb,h.angularVelocity)}}for(var g in f){var h=f[g];h.preStep&&h.preStep.call(h)}var mb=u.step_q,nb=u.step_w,ob=u.step_wq,pb=a.RigidBody.DYNAMIC|a.RigidBody.KINEMATIC;for(var g in f){var jb=f[g];jb.motionstate&pb&&(jb.velocity.x+=jb.force.x*jb.invMass*b,jb.velocity.y+=jb.force.y*jb.invMass*b,jb.velocity.z+=jb.force.z*jb.invMass*b,jb.angularVelocity.x+=jb.tau.x*jb.invInertia.x*b,jb.angularVelocity.y+=jb.tau.y*jb.invInertia.y*b,jb.angularVelocity.z+=jb.tau.z*jb.invInertia.z*b,jb.position.x+=jb.velocity.x*b,jb.position.y+=jb.velocity.y*b,jb.position.z+=jb.velocity.z*b,nb.set(jb.angularVelocity.x,jb.angularVelocity.y,jb.angularVelocity.z,0),nb.mult(jb.quaternion,ob),jb.quaternion.x+=b*.5*ob.x,jb.quaternion.y+=b*.5*ob.y,jb.quaternion.z+=b*.5*ob.z,jb.quaternion.w+=b*.5*ob.w,c.stepnumber%10===0&&jb.quaternion.normalizeFast()),jb.force.set(0,0,0),jb.tau.set(0,0,0)}c.time+=b,c.stepnumber+=1
;for(var g in f){var h=f[g];h.postStep&&h.postStep.call(h)}},a.ContactPoint=function(b,c,d,e,f){if(!(b instanceof a.RigidBody&&c instanceof a.RigidBody))throw new Error("Arguments 1 and 2 must be instances of CANNON.RigidBody.");this.ri=new a.Vec3,this.rj=new a.Vec3,this.ni=new a.Vec3,d&&d.copy(this.ri),e&&e.copy(this.rj),f&&f.copy(this.ni),this.bi=b,this.bj=c},a.ContactGenerator=function(){function c(d,e,f,g,h,i,j,k,l){function o(c,d){if(b.length){var e=b.pop();return e.bi=c,e.bj=d,e}return new a.ContactPoint(c,d)}function p(a){var b;b=a.ri,a.ri=a.rj,a.rj=b,a.ni.negate(a.ni),b=a.bi,a.bi=a.bj,a.bj=b}function q(a,b,d,e,f,g,h,i,j){for(var k=0;k<d.childShapes.length;k++){var l=[];c(l,b,d.childShapes[k],e,f.vadd(h.vmult(d.childOffsets[k])),g,h.mult(d.childOrientations[k]),i,j);for(var m=0;m<l.length;m++)l[m].rj.vadd(h.vmult(d.childOffsets[k]),l[m].rj),a.push(l[m])}}var m=!1;if(e.type>f.type){var n;n=f,f=e,e=n,n=h,h=g,g=n,n=j,j=i,i=n,n=l,l=k,k=n,m=!0}if(e.type==a.Shape.types.SPHERE){if(f.type==a.Shape.types.SPHERE){var r=o(k,l);h.vsub(g,r.ni),r.ni.normalize(),r.ni.copy(r.ri),r.ni.copy(r.rj),r.ri.mult(e.radius,r.ri),r.rj.mult(-f.radius,r.rj),d.push(r)}else if(f.type==a.Shape.types.PLANE){var r=o(k,l);f.normal.copy(r.ni),j.vmult(r.ni,r.ni),r.ni.negate(r.ni),r.ni.normalize(),r.ni.mult(e.radius,r.ri);var s=g.vsub(h),t=r.ni.mult(r.ni.dot(s));r.rj=s.vsub(t),t.norm()<=e.radius&&d.push(r)}else if(f.type==a.Shape.types.BOX){var u=g.vsub(h),v=f.getSideNormals(!0,j),w=e.radius,x=[],y=!1;for(var z=0;z<v.length&&!y;z++){var A=v[z].copy(),B=A.norm();A.normalize();var C=u.dot(A);if(C<B+w&&C>0){var D=v[(z+1)%3].copy(),E=v[(z+2)%3].copy(),F=D.norm(),G=E.norm();D.normalize(),E.normalize();var H=u.dot(D),I=u.dot(E);if(H<F&&H>-F&&I<G&&I>-G){y=!0;var r=o(k,l);A.mult(-w,r.ri),A.copy(r.ni),r.ni.negate(r.ni),A.mult(B).vadd(D.mult(H)).vadd(E.mult(I),r.rj),d.push(r)}}}var J=new a.Vec3;for(var K=0;K<2&&!y;K++)for(var L=0;L<2&&!y;L++)for(var M=0;M<2&&!y;M++){J.set(0,0,0),K?J.vadd(v[0],J):J.vsub(v[0],J),L?J.vadd(v[1],J):J.vsub(v[1],J),M?J.vadd(v[2],J):J.vsub(v[2],J);var N=h.vadd(J).vsub(g);if(N.norm()<w){y=!0;var r=o(k,l);N.copy(r.ri),r.ri.normalize(),r.ri.copy(r.ni),r.ri.mult(w,r.ri),J.copy(r.rj),d.push(r)}}var O=new a.Vec3,P=new a.Vec3,r=new a.Vec3,Q=new a.Vec3,R=new a.Vec3;for(var K=0;K<v.length&&!y;K++)for(var L=0;L<v.length&&!y;L++)if(K%3!=L%3){v[L].cross(v[K],O),O.normalize(),v[K].vadd(v[L],P),g.copy(r),r.vsub(P,r),r.vsub(h,r);var S=r.dot(O);O.mult(S,Q);var M=0;while(M==K%3||M==L%3)M++;g.copy(R),R.vsub(Q,R),R.vsub(P,R),R.vsub(h,R);var T=Math.abs(S),U=R.norm();if(T<v[M].norm()&&U<w){y=!0;var V=o(k,l);P.vadd(Q,V.rj),V.rj.copy(V.rj),R.negate(V.ni),V.ni.normalize(),V.rj.copy(V.ri),V.ri.vadd(h,V.ri),V.ri.vsub(g,V.ri),V.ri.normalize(),V.ri.mult(w,V.ri),d.push(V)}}}else if(f.type==a.Shape.types.COMPOUND)q(d,e,f,g,h,i,j,k,l);else if(f.type==a.Shape.types.CONVEXHULL)throw new Error("sphere/convexhull contacts not implemented yet.")}else if(e.type==a.Shape.types.PLANE){if(f.type==a.Shape.types.PLANE)throw"Plane-plane collision... wait, you did WHAT?";if(f.type==a.Shape.types.BOX){var W=e.normal.copy(),X=0,Y=f.getCorners(j);for(var z=0;z<Y.length&&X<=4;z++){var r=o(k,l),Z=Y[z].vadd(h);Y[z].copy(r.rj);var $=Z.vsub(g),_=W.dot($);if(_<=0){X++;var ab=W.mult(_);$.vsub(ab,r.ri),W.copy(r.ni),d.push(r)}}}else if(f.type==a.Shape.types.COMPOUND)q(d,e,f,g,h,i,j,k,l);else if(f.type==a.Shape.types.CONVEXHULL){var bb=new a.ConvexHull,cb=new a.Vec3,db=new a.Vec3;e.normal.tangents(cb,db),cb.mult(1e5,cb),db.mult(1e5,db);var W=e.normal,eb=[new a.Vec3(-cb.x-db.x-W.x,-cb.y-db.y-W.y,-cb.z-db.z-W.z),new a.Vec3(cb.x-db.x+0*W.x,cb.y-db.y+0*W.y,cb.z-db.z+0*W.z),new a.Vec3(cb.x+db.x-W.x,cb.y+db.y-W.y,cb.z+db.z-W.z),new a.Vec3(-cb.x+db.x-W.x,-cb.y+db.y-W.y,-cb.z+db.z-W.z),new a.Vec3(-cb.x-db.x+0*W.x,-cb.y-db.y+0*W.y,-cb.z-db.z+0*W.z),new a.Vec3(+cb.x-db.x+0*W.x,cb.y-db.y+0*W.y,cb.z-db.z+0*W.z),new a.Vec3(+cb.x+db.x+0*W.x,+cb.y+db.y+0*W.y,cb.z+db.z+0*W.z),new a.Vec3(-cb.x+db.x+0*W.x,-cb.y+db.y+0*W.y,-cb.z+db.z+0*W.z)];cb.normalize(),db.normalize(),bb.addPoints(eb,[[0,1,2,3],[4,5,6,7],[0,1,4,5],[2,3,6,7],[0,3,4,7],[1,2,5,6]],[new a.Vec3(-W.x,-W.y,-W.z),new a.Vec3(W.x,W.y,W.z),new a.Vec3(-db.x,-db.y,-db.z),new a.Vec3(db.x,db.y,db.z),new a.Vec3(-cb.x,-cb.y,-cb.z),new a.Vec3(cb.x,cb.y,cb.z)]),W=new a.Vec3,e.normal.copy(W);var fb=new a.Vec3;W.negate(fb);if(f.testSepAxis(fb,bb,h,j,g,i)!==!1){var V=[];bb.clipAgainstHull(g,i,f,h,j,fb,-100,100,V);for(var K=0;K<V.length;K++){var r=o(k,l);fb.negate(r.ni);var gb=new a.Vec3;V[K].normal.negate(gb),gb.mult(V[K].depth,gb),r.ri.set(V[K].point.x+gb.x,V[K].point.y+gb.y,V[K].point.z+gb.z),r.rj.set(V[K].point.x,V[K].point.y,V[K].point.z),r.rj.vsub(h,r.rj),r.ri.vsub(g,r.ri),d.push(r)}}}}else if(e.type==a.Shape.types.BOX)f.type==a.Shape.types.BOX?c(d,e.convexHullRepresentation,f.convexHullRepresentation,g,h,i,j,k,l):f.type==a.Shape.types.COMPOUND?q(d,e,f,g,h,i,j,k,l):f.type==a.Shape.types.CONVEXHULL&&c(d,e.convexHullRepresentation,f,g,h,i,j,k,l);else if(e.type==a.Shape.types.COMPOUND)f.type==a.Shape.types.COMPOUND?q(d,e,f,g,h,i,j,k,l):f.type==a.Shape.types.CONVEXHULL&&q(d,f,e,h,g,j,i,l,k);else if(e.type==a.Shape.types.CONVEXHULL&&f.type==a.Shape.types.CONVEXHULL){var fb=new a.Vec3;if(e.findSeparatingAxis(f,g,i,h,j,fb)){var V=[];e.clipAgainstHull(g,i,f,h,j,fb,-100,100,V);for(var K=0;K<V.length;K++){var r=o(k,l);fb.negate(r.ni);var gb=new a.Vec3;V[K].normal.negate(gb),gb.mult(V[K].depth,gb),r.ri.set(V[K].point.x+gb.x,V[K].point.y+gb.y,V[K].point.z+gb.z),r.rj.set(V[K].point.x,V[K].point.y,V[K].point.z),r.rj.vsub(h,r.rj),r.ri.vsub(g,r.ri),d.push(r)}}}for(var hb=0;m&&hb<d.length;hb++)p(d[hb])}this.contactReduction=!0;var b=[];this.reduceContacts=function(a){},this.getContacts=function(a,d,e,f,g){for(var h=0;g&&h<g.length;h++)b.push(g[h]);for(var i=0;i<a.length;i++){var h=a[i],j=d[i],k=e.bodies[h],l=e.bodies[j];c(f,k.shape,l.shape,k.position,l.position,k.quaternion,l.quaternion,k,l)}}},typeof module!="undefined"?module.exports=a:this.CANNON=a}).apply(this);