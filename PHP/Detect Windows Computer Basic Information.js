//https://www.phpclasses.org/package/11202-PHP-Get-system-resources-of-a-Windows-based-computer.html

<?php 
/*************************************************************************************** 
                                Using Class DetectBasicInfoComputerWin 
***************************************************************************************/ 
ini_set("xdebug.overload_var_dump",1); // to hide path of script with var_dump 
require('detectBasicInfoComputerWin.php'); 

$bInfoComptWin = new DetectBasicInfoComputerWin(); 

echo '<center><h1>View basic information about your computer OS Windows With PHP</h1></center>'; 


echo '<b>Information About Operating System</b><hr>'; 
  var_dump(trim($bInfoComptWin->osystem())); 
  
echo '<b>Information About CPU</b><hr>'; 
  var_dump(trim($bInfoComptWin->getCpuInfo())); 
  
echo '<b>Information About RAM Max Capacity</b><hr>'; 
  var_dump(trim($bInfoComptWin->getRamMaxCap())); 
  
echo '<b>Information About Physical Drives</b><hr>'; 
  var_dump(trim($bInfoComptWin->getPhysDriv())); 
  
echo '<b>Information About graphics card</b><hr>'; 
  var_dump(trim($bInfoComptWin->getCard())); 
  
echo '<b>Information About BIOS</b><hr>'; 
  var_dump(trim($bInfoComptWin->getBios())); 
  
echo '<b>Information About Printer list status</b><hr>'; 
  var_dump(trim($bInfoComptWin->getPrinterList())); 
  
echo '<b>Information About the Network card</b><hr>'; 
  var_dump(trim($bInfoComptWin->getNetworkCard())); 
  
  
  


<?php 
/** 
 * A simple php class to View basic information about your computer with operating system Windows 
 * 
 * Get info:: os,cpu,ram,card,printer list status,bios. 
 * 
 * Before used this class, below a prerequise : 
 * 
 * PHP 5 or newer 
 * @author Hassane Moussa <mhassane2012@gmail.com> 
 * @From Africa / Niamey-Niger 
 * @License GPL 
 */ 
  
 class DetectBasicInfoComputerWin{ 
    
    private 
    $output="", 
    $checkOs=""; 
    
    /** 
    * Constructor of the class 
    */ 
    public function __construct() 
    { 
        if (strtoupper(substr(PHP_OS, 0, 3)) !== 'WIN') { 
            echo $this->checkOs = " Your OS isn't Windows"; 
            exit; 
        } 
    } 
        
    /** 
    * Get Information About Operating System 
    */ 
    public function osystem() 
    { 
        return $this->terminal('wmic os get Caption,Manufacturer,Name,OperatingSystemSKU,OSArchitecture,Version,FreePhysicalMemory,FreeVirtualMemory,FreeSpaceInPagingFiles,InstallDate,CSName /value'); 
    } 
    /** 
    * Get Information About CPU 
    */ 
    public function getCpuInfo() 
    { 
        return $this->terminal('wmic CPU get Name,Manufacturer,NumberOfCores,NumberOfLogicalProcessors /value'); 
    } 
    /** 
    * Get Information About RAM Max Capacity 
    */ 
    public function getRamMaxCap() 
    { 
        return $this->terminal('wmic MEMPHYSICAL get MaxCapacity /value'); 
    } 
    /** 
    * Get Information About Physical Drives 
    */ 
    public function getPhysDriv() 
    { 
        return $this->terminal('wmic diskdrive get Name,InterfaceType,Manufacturer,MediaType,Model,SerialNumber,Size,Status /value'); 
        
    } 
    /** 
    * Get Information About graphics card 
    */ 
    public function getCard() 
    { 
        return $this->terminal('wmic path Win32_VideoController get Name /value'); 
    } 
    /** 
    * Get Information About BIOS 
    */ 
    public function getBios() 
    { 
        return $this->terminal('wmic BIOS get Manufacturer,Name,SMBIOSBIOSVersion,Version /value'); 
    } 
    /** 
    * Get Information About Printer list status 
    */ 
    public function getPrinterList() 
    { 
        return $this->terminal('wmic printer list status'); 
    } 
    /** 
    * Get Information About the Network card 
    */ 
    public function getNetworkCard() 
    { 
        return $this->terminal('wmic nicconfig where "MACAddress is not Null" get Description,ServiceName /value'); 
    } 
    
    private function terminal($cmd) 
    { 
        if(function_exists('shell_exec')){ 
        $this->output = shell_exec($cmd); 
        }else{ 
        $this->output = 'Command execution not possible.'; 
        } 
        return $this->output; 
    } 
    

     
 } 