Vim�UnDo� �vgp Ĩc�C}*{��%N�=Y�2	�9�.                                      `�}    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�}     �                 �              5��                                                  �                        
                   
       �                                              �                                              �                                              �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�}    �               1const scoreTemplate = score => `Score: ${score}`;       -class Score extends Phaser.GameObjects.Text {   )  constructor(scene, x, y, text, style) {   3    super(scene, x, y, scoreTemplate(text), style);           // Add text to the scene.       scene.add.existing(this);     }         /**      * Updates the score text.      *      * @param {Number} score      */     setScore = score => {5��                         |       b      f      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�}    �             5��                                                5��