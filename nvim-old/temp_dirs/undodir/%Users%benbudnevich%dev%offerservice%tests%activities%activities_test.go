Vim�UnDo� �m�s�69Y�J��`�e�.G� �,��f�3e   L                                  `ۇ�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `ۅ�     �                   �               5��                    @                      E      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `ۆ     �         A      type UnitTestSuite struct {5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `ۆ     �         A      type TestSuite struct {5��                         �                      �                        �                     �                         �                     �                         �                     5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	                 v   	    `ۆ     �         A      ?func (s *UnitTestSuite) AfterTest(suiteName, testName string) {5��       	                 �                    �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	              	   �             	       �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	              
   �             
       �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	                 �                    �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �                         �                     �       
                  �                     �       	                 �                    5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	                 v       `ۆ     �         A      7func (s *UnitTestSuite) Test_SimpleWorkflow_Success() {5��       	                 X                    5�_�                    %   	    ����                                                                                                                                                                                                                                                                                                                            %   	       %          v       `ۆ     �   $   &   A      Dfunc (s *UnitTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {5��    $   	                 1                    5�_�                    1   	    ����                                                                                                                                                                                                                                                                                                                            1   	       1          v       `ۆ     �   0   2   A      =func (s *UnitTestSuite) Test_SimpleWorkflow_ActivityFails() {5��    0   	                                     5�_�      	              ?   	    ����                                                                                                                                                                                                                                                                                                                            ?   	       ?          v       `ۆ     �   >   @   A      &func TestUnitTestSuite(t *testing.T) {5��    >   	                                      5�_�      
           	   @       ����                                                                                                                                                                                                                                                                                                                            @          @          v       `ۆ     �   ?   A   A      (        suite.Run(t, new(UnitTestSuite))5��    ?                    ^                    5�_�   	              
      	    ����                                                                                                                                                                                                                                                                                                                               	                 v   #    `ۆ     �         A      %func (s *UnitTestSuite) SetupTest() {5��       	                 �                    5�_�   
                    #    ����                                                                                                                                                                                                                                                                                                                               	                 v   #    `ۆ     �      A   A   =           "context"           "errors"           "testing"       *        "github.com/stretchr/testify/mock"   +        "github.com/stretchr/testify/suite"       %        "go.temporal.io/sdk/activity"   &        "go.temporal.io/sdk/testsuite"   )       "type IntegrationTestSuite struct {           suite.Suite   #        testsuite.WorkflowTestSuite       .        env *testsuite.TestWorkflowEnvironment   }       ,func (s *IntegrationTestSuite) SetupTest() {   .        s.env = s.NewTestWorkflowEnvironment()   }       Ffunc (s *IntegrationTestSuite) AfterTest(suiteName, testName string) {   '        s.env.AssertExpectations(s.T())   }       >func (s *IntegrationTestSuite) Test_SimpleWorkflow_Success() {   =        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")       +        s.True(s.env.IsWorkflowCompleted())   +        s.NoError(s.env.GetWorkflowError())   }       Kfunc (s *IntegrationTestSuite) Test_SimpleWorkflow_ActivityParamCorrect() {   N        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(   C          func(ctx context.Context, value string) (string, error) {   .                s.Equal("test_success", value)   !                return value, nil   
        })   =        s.env.ExecuteWorkflow(SimpleWorkflow, "test_success")       +        s.True(s.env.IsWorkflowCompleted())   +        s.NoError(s.env.GetWorkflowError())   }       Dfunc (s *IntegrationTestSuite) Test_SimpleWorkflow_ActivityFails() {   N        s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(   2          "", errors.New("SimpleActivityFailure"))   =        s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")       +        s.True(s.env.IsWorkflowCompleted())       '        err := s.env.GetWorkflowError()           s.Error(err)   5        var applicationErr *temporal.ApplicationError   /        s.True(errors.As(err, &applicationErr))   @        s.Equal("SimpleActivityFailure", applicationErr.Error())   }       -func TestIntegrationTestSuite(t *testing.T) {   /        suite.Run(t, new(IntegrationTestSuite))5��           =       =              c      o      5�_�                            ����                                                                                                                                                                                                                                                                                                                               !          !       v   "    `ۇ0     �      !   A       �         A    5��                         �               b      5�_�                            ����                                                                                                                                                                                                                                                                                                                            )   !       )   !       v   "    `ۇ1     �         S    5��                          �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                            *   !       *   !       v   "    `ۇ2     �         T      @func ProgressWorkflow(ctx workflow.Context, percent int) error {5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                            *   !       *   !       v   "    `ۇ2     �         T      0func (ctx workflow.Context, percent int) error {5��                         �                      �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                        �                     �                     	   �              	       �              	       
   �       	       
       �              
          �       
              �                        �                     �                        �                     �                        �                     �                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                            *   !       *   !       v   "    `ۇ5     �      #   T      %    logger := workflow.GetLogger(ctx)       Y    err := workflow.SetQueryHandler(ctx, "getProgress", func(input []byte) (int, error) {           return percent, nil       })       if err != nil {   <        logger.Info("SetQueryHandler failed.", "Error", err)           return err       }       -    for percent = 0; percent<100; percent++ {   \                // Important! Use `workflow.Sleep()`, not `time.Sleep()`, because Temporal's   D                // test environment doesn't stub out `time.Sleep()`.   *        workflow.Sleep(ctx, time.Second*1)       }           return nil   }5��                               "      �      5�_�                           ����                                                                                                                                                                                                                                                                                                                            +   !       +   !       v   "    `ۇ8     �         U    5��                          �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                            ,   !       ,   !       v   "    `ۇ=    �         V    5��                          9                      5�_�                    <        ����                                                                                                                                                                                                                                                                                                                            <          @          V       `ۇO     �   ;   <          G	s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(   ;		func(ctx context.Context, value string) (string, error) {   !			s.Equal("test_success", value)   			return value, nil   		})5��    ;                      Q      �               5�_�                    C        ����                                                                                                                                                                                                                                                                                                                            C          D          V       `ۇ_     �   B   C          G	s.env.OnActivity(SimpleActivity, mock.Anything, mock.Anything).Return(   *		"", errors.New("SimpleActivityFailure"))5��    B                            s               5�_�                           ����                                                                                                                                                                                                                                                                                                                            C          C          V       `ۇi     �                	"go.temporal.io/sdk/activity"5��                          �                      5�_�                    H       ����                                                                                                                                                                                                                                                                                                                            I          H          V       `ۇq     �   G   H          .	var applicationErr *temporal.ApplicationError   (	s.True(errors.As(err, &applicationErr))5��    G                      �      X               5�_�                    H   "    ����                                                                                                                                                                                                                                                                                                                            A          I          V       `ۇ{    �   G   H          9	s.Equal("SimpleActivityFailure", applicationErr.Error())5��    G                      �      :               5�_�                     A        ����                                                                                                                                                                                                                                                                                                                            A           I           V        `ۇ�    �   H   J           �   G   I          }�   F   H          	s.Error(err)�   E   G           	err := s.env.GetWorkflowError()�   D   F           �   C   E          $	s.True(s.env.IsWorkflowCompleted())�   B   D           �   A   C          6	s.env.ExecuteWorkflow(SimpleWorkflow, "test_failure")�   @   B          Dfunc (s *IntegrationTestSuite) Test_SimpleWorkflow_ActivityFails() {5��    @           D       G   �      D       G       �    A           6       9   �      6       9       �    B                       9                      �    C           $       '   :      $       '       �    D                       b                      �    E                   #   c              #       �    F                     �                    �    G                     �                    �    H                       �                      5��